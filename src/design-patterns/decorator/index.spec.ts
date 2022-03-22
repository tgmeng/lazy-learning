import { ConcreteComponent, ConcreteDecoratorA, ConcreteDecoratorB } from './';

describe('Decorator', () => {
  it('should work', () => {
    const cpn = new ConcreteComponent();
    const deco1 = new ConcreteDecoratorA(cpn);
    const deco2 = new ConcreteDecoratorB(deco1);

    expect(deco2.operation()).toBe(
      'ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))'
    );
  });

  it('should work with order', () => {
    const cpn = new ConcreteComponent();
    const deco1 = new ConcreteDecoratorB(cpn);
    const deco2 = new ConcreteDecoratorA(deco1);

    expect(deco2.operation()).toBe(
      'ConcreteDecoratorA(ConcreteDecoratorB(ConcreteComponent))'
    );
  });
});
