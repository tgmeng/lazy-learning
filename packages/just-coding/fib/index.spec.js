import {
  fib, fibR, fibR2, genFib,
} from './index';

describe('fib', () => {
  it('fibR has a test', () => {
    expect(fibR(5)).toBe(5);
  });

  it('fibR2 has a test', () => {
    expect(fibR2(100)).toBe(354224848179262000000);
  });

  it('fib has a test', () => {
    expect(fib(5)).toBe(5);
  });

  it('fib has a test', () => {
    expect(fib(100)).toBe(354224848179262000000);
  });

  it('genFib', () => {
    const gen = genFib();
    expect(gen.next().value).toBe(0);
    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(2);
    expect(gen.next().value).toBe(3);
    expect(gen.next().value).toBe(5);
    expect(gen.next().value).toBe(8);
    expect(gen.next().value).toBe(13);
  });
});
