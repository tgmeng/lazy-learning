import {
  ConcreteProductACreator,
  ConcreteProductBCreator,
  Creator,
} from './creator';

describe('Factory Method', () => {
  it('basic', () => {
    const creatorA = new ConcreteProductACreator();
    expect(creatorA.someOperation()).toBe('ConcreteProductA');

    const creatorB = new ConcreteProductBCreator();
    expect(creatorB.someOperation()).toBe('ConcreteProductB');
  });
});
