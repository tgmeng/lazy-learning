import { flatSingle, flatSingle2, flatDeep, flatDeep2, flat } from './index';

function genDeepArr(arr, depth = 1000) {
  const root = [...arr];
  let cur = root;
  let tempDepth = depth;
  while (tempDepth > 0) {
    const neo = [...arr];
    cur.push(neo);
    cur = neo;
    tempDepth -= 1;
  }
  return root;
}

describe('flat', () => {
  it('flatSingle', () => {
    const arr = [1, 2, [3, 4]];
    expect(flatSingle(arr)).toEqual([1, 2, 3, 4]);
    expect(flatSingle2(arr)).toEqual([1, 2, 3, 4]);
  });

  it('flatDeep', () => {
    const arr = [1, 2, 3, [4, 5, 6, 7, [8, 9, 10]]];
    expect(flatDeep(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('flat (with depth)', () => {
    const arr = [1, 2, 3, [4, 5, 6, 7, [8, 9, 10]]];
    expect(flat(arr, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, [8, 9, 10]]);
    expect(flat(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('flat, maximum call stack size exceeded', () => {
    expect(() => {
      flatDeep2(genDeepArr([1, 2, 3], 10000));
    }).not.toThrow();
  });
});
