export const addItemToArray = <T>(callback: (arg0: T[]) => void) => (arr: T[]) => (item: T) => {
  callback([...arr, item]);
};

export const removeItemFromArray = <T>(callback: (arg0: T[]) => void) => (arr: T[]) => (index: number) => {
  callback([...arr.slice(0, index), ...arr.slice(index + 1)]);
};

export const calculateArrayTotal = (arr: number[]) => {
  return arr.reduce((currentvalue, value) => currentvalue + value, 0);
};

export const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (x, i) => i + start);
