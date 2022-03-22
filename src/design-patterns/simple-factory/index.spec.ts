import { SimpleFactory } from './index';

describe('Simple Factory', () => {
  it('basic', () => {
    const product = SimpleFactory.createProduct('a');
    expect(product.operation()).toBe('ConcreteProductA');
  });
});
