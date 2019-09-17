import { permute, permute2 } from './index';

describe('permute', () => {
  it('permute', () => {
    expect(permute('abc')).toEqual(
      expect.arrayContaining(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
    );
  });
});
