import {
  AbstractFactory,
  ConcreteFactory1,
  ConcreteFactory2,
  ProductA,
  ProductB,
} from './';

function createProducts(factory: AbstractFactory): [ProductA, ProductB] {
  return [factory.createProductA(), factory.createProductB()];
}

describe('Abstract Factory', () => {
  it('should work', () => {
    const [A1, B1] = createProducts(new ConcreteFactory1());
    expect(A1.operationA()).toBe('ConcreteProductA1');
    expect(B1.operationB()).toBe('ConcreteProductB1');

    const [A2, B2] = createProducts(new ConcreteFactory2());
    expect(A2.operationA()).toBe('ConcreteProductA2');
    expect(B2.operationB()).toBe('ConcreteProductB2');
  });
});
