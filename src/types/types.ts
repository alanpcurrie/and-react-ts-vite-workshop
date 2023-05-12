export type ReactNode = React.ReactNode;

export type ReactCSSProperties = React.CSSProperties

export type Rating = {
    rate: number;
    count: number;
}

export type Products = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export type Fetching<T> = {
    type: "FETCHING";
    payload: T;
}

export type Fetched<T> = {
    type: "FETCHED";
    payload: T;
}

export type FetchError<T> = {
    type: "FETCH_ERROR";
    payload: T;
}

export type Action<T> = Fetching<T> | Fetched<T> | FetchError<T>;


export type State<T> = {
    status: string;
    error: null | string;
    data: T;
}

export type ReducerMap<T> = Record<Action<T>["type"], (state: State<T>, action: Action<T>) => State<T>>;

export type Result<T, E extends Error> = { ok: true, value: T } | { ok: false, error: E };
