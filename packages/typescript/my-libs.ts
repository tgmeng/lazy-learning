type MyExclude<T, U> = T extends U ? never : T;

type MyExtract<T, U> = T extends U ? T : never;

type MyPick<T, U extends keyof T> = {
  [K in U]: T[K];
};

type MyOmit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;
// type MyOmit<T, U extends keyof T> = {
//   [K in MyExclude<keyof T, U>]: T[K];
// };

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;
