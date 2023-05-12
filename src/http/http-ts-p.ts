import { useEffect, useRef, useReducer } from "react";
import type { State, Action } from 'types/types'
import { match } from 'ts-pattern';

export const useFetch = (url: string) => {

  const initialState = {
    status: "idle",
    error: null,
    data: []
  };

  const cache = useRef<Record<string, string>>({});

  const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
    const matchAction = match(action.type);

    return matchAction
      .with("FETCHING", () => ({
        ...state,
        status: "fetching",
        data: action.payload
      }))
      .with("FETCHED", () => ({
        ...state,
        status: "fetched",
        data: action.payload
      }))
      .with("FETCH_ERROR", () => ({
        ...state,
        status: "error",
        error: action.payload as string
      }))
      .exhaustive()
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    let cancelRequest = false;
    if (!url || !url.trim()) return;

    const fetchData = async <T>(): Promise<void> => {
      dispatch({ type: "FETCHING", payload: undefined as T });
      if (cache.current[url]) {
        const data = cache.current[url] as T;
        dispatch({ type: "FETCHED", payload: data as T });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: "FETCHED", payload: data as T });
        } catch (error) {
          if (cancelRequest) return;
          if (error instanceof Error) {
            dispatch({ type: "FETCH_ERROR", payload: error.message });
          }
          return;
        }
        finally {
          console.log('some cleanup');
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return { state };
};
