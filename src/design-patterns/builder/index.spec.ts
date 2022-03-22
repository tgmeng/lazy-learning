import { ConcreteBuilder1, Director } from './';

describe('Builder', () => {
  it('should work', () => {
    const builder = new ConcreteBuilder1();
    const director = new Director(builder);

    director.buildFull();
    const product1 = builder.getProduct();
    expect(product1.parts).toEqual(['A', 'B', 'C']);

    director.buildMinimal();
    const product2 = builder.getProduct();
    expect(product2.parts).toEqual(['A']);
  });
});
