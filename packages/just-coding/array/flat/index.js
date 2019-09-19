export function flatSingle(arr) {
  return arr.reduce((prev, val) => prev.concat(val), []);
}

export function flatSingle2(arr) {
  return [].concat(...arr);
}

export function flatDeep(arr) {
  return arr.reduce(
    (prev, val) => prev.concat(Array.isArray(val) ? flatDeep(val) : val),
    []
  );
}

export function flat(arr, depth = 1) {
  const nextDepth = depth - 1;
  return arr.reduce(
    (prev, val) =>
      prev.concat(
        Array.isArray(val) && nextDepth > 0 ? flat(val, nextDepth) : val
      ),
    []
  );
}

export function flatDeep2(arr) {
  const stack = [arr];
  const res = [];

  while (stack.length) {
    const cur = stack.pop();

    if (Array.isArray(cur)) {
      const reversed = [...cur].reverse();
      stack.push(...reversed);
    } else {
      res.push(cur);
    }
  }

  return res;
}
