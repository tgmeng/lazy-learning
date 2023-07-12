import { describe, it, expect, vi } from 'vitest';
import { debounce, throttle } from './';

vi.useFakeTimers();

describe('debounce & throttle', () => {
  it('debounce', () => {
    const a = vi.fn();
    const b = debounce(a, 100);

    b(1);
    vi.advanceTimersByTime(200);
    b();
    b();
    b();
    vi.advanceTimersByTime(200);

    expect(a).toHaveBeenCalledTimes(2);
  });

  it('throttle', () => {
    const a = vi.fn();
    const b = throttle(a, 100);
  });
});
