import { debounce, throttle } from './';

jest.useFakeTimers();

describe('debounce & throttle', () => {
  it('debounce', () => {
    const a = jest.fn();
    const b = debounce(a, 100);

    b(1);
    jest.advanceTimersByTime(200);
    b();
    b();
    b();
    jest.advanceTimersByTime(200);

    expect(a).toHaveBeenCalledTimes(2);
  });

  it('throttle', () => {
    const a = jest.fn();
    const b = throttle(a, 100);
  });
});
