export const isEmpty = <T>(obj: T): boolean =>
  Object.values(obj as Record<keyof T, T[keyof T]>).some((value) => (!value ? true : false));