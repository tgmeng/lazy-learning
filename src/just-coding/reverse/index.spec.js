import { reverse } from './index';

describe('reverse', () => {
  test('reverse', () => {
    expect(reverse('12345')).toBe('54321');
  });
});
