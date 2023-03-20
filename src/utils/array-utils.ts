export const addItemToArray = (callback: (arg0: any[]) => void) => (arr: any[]) => (item: any) => {
  callback([...arr, ...item]);
};

export const removeItemFromArray = (callback: (arg0: any) => void) => (arr: string | any[]) => (index: number) => {
  callback([...arr.slice(0, index), ...arr.slice(index + 1)]);
};

export const calculateArrayTotal = (arr: number[]) => {
  return arr.reduce((currentvalue, value) => currentvalue + value, 0);
};

export const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (x, i) => i + start);
