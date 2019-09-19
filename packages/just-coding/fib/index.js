import { memoize } from '../../util';

/**
 * 普通递归 fibonacci.
 * 存在重复计算问题:
 * fib(10) -> fib(9) + fib(8)
 * fib(9) -> fib(8) + fib(7)
 * fib(8) -> fib(7) + fib(6)
 * ...
 * 所以当 n 变大, 会算得很慢.
 */
export function fibR(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibR(n - 1) + fibR(n - 2);
}

/**
 * 带缓存的递归 fibonacci.
 * 使用缓存避免重复计算.
 */
export const fibR2 = memoize((n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibR2(n - 1) + fibR2(n - 2);
});

/**
 * 迭代的 fibonacci.
 */
export function fib(n, cur = 0, next = 1) {
  while (n--) {
    const _next = cur + next;
    cur = next;
    next = _next;
  }

  return cur;
}

/**
 * 无限 fibonacci.
 */
export function* genFib(cur = 0, next = 1) {
  yield cur;
  yield* genFib(next, cur + next);
}
