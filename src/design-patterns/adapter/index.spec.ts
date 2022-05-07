import { Adaptee, Adapter, Target } from './';

function runClient(target: Target) {
  return target.operation();
}

describe('Adapter', () => {
  it('should work', () => {
    expect(runClient(new Target())).toBe('hello world');

    // Error!
    // expect(runClient(new Adaptee())).toBe('hello world');

    expect(runClient(new Adapter(new Adaptee()))).toBe('hello world');

    // expect();
  });
});
