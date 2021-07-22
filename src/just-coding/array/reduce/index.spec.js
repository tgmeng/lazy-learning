import { reduce, reduceAsync } from '.';

describe('reduce', () => {
  it('reduce', () => {
    expect(reduce([1, 2, 3, 4], (res, val) => res + val)).toBe(10);
  });

  it('reduceAsync', async () => {
    const a = () => Promise.resolve(1);
    const b = () => Promise.resolve(2);
    const c = () => new Promise((resolve) => setTimeout(() => resolve(3), 100));

    const result = await reduceAsync([a, b, c], (res, val) => res + val);

    expect(result).toBe(6);
  });
});
