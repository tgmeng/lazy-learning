import { filter } from './index';

describe('filter', () => {
  it('filter', () => {
    expect(filter([1, 2, 3, 4], item => item < 3)).toEqual([1, 2]);
  });

  it('filter with thisArg', () => {
    const thisArg = {};
    filter(
      [1, 2, 3, 4],
      function() {
        expect(this).toBe(thisArg);
      },
      thisArg
    );
  });
});
