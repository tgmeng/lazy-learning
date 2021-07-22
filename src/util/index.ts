/**
 * `null` or `undefined`
 */
export function isNil(value: any) {
  return value == null;
}

export function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const [item] = args;
    if (cache.has(item)) {
      return cache.get(item);
    }
    const res = fn.call(this, ...args);
    cache.set(item, res);
    return res;
  };
}

export function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return <T>(arg: T) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)));
}
