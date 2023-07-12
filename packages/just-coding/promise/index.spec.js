import { describe, it, expect, vi } from 'vitest';
import { PromiseAll } from './index';

vi.useFakeTimers();

describe('Promise', () => {
  it('Promise.all resolve', (done) => {
    const a = new Promise((resolve) => {
      setTimeout(() => {
        resolve('a');
      }, 1000);
    });

    const b = new Promise((resolve) => {
      setTimeout(() => {
        resolve('b');
      }, 500);
    });

    const c = a.then(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('c');
          }, 2000);
        })
    );

    PromiseAll([c, b]).then((res) => {
      expect(res).toEqual(['c', 'b']);
      done();
    });

    vi.advanceTimersByTime(1100);
    vi.advanceTimersByTime(2000);

    process.nextTick(() => {
      vi.advanceTimersByTime(2000);
    });
  });

  it('Promise.all reject', (done) => {
    const a = new Promise((resolve) => {
      setTimeout(() => {
        resolve('a');
      }, 1000);
    });

    const b = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('b'));
      }, 500);
    });

    const fn = vi.fn();

    PromiseAll([a, b])
      .then(
        () => fn('resolve'),
        () => fn('catch')
      )
      .then(() => {
        expect(fn).toHaveBeenCalledWith('catch');
        done();
      });

    vi.advanceTimersByTime(600);
  });
});
