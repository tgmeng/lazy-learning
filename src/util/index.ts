/**
 * `null` or `undefined`
 */
export function isNil(value: any) {
  return value == null;
}

export function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const [item] = args;
    if (cache.has(item)) {
      return cache.get(item);
    }
    const res = fn.call(this, ...args);
    cache.set(item, res);
    return res;
  };
}
