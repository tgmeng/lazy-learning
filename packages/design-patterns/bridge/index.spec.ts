import {
  Abstraction,
  ExtendedAbstraction,
  ConcreteImplementationA,
  ConcreteImplementationB,
} from './';

describe('Bridge', () => {
  it('should work', () => {
    const implA = new ConcreteImplementationA();
    const abstraction = new Abstraction(implA);
    expect(abstraction.operation()).toBe('Hello ConcreteImplementationA');

    const implB = new ConcreteImplementationB();
    const extAbstraction = new ExtendedAbstraction(implB);
    expect(extAbstraction.operation()).toBe('Hello and bye ConcreteImplementationB');
  });
});
