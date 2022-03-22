import { ConcreteProductA, ConcreteProductB, Product } from './product';

export abstract class Creator {
  abstract factoryMethod(): Product;

  someOperation() {
    const product = this.factoryMethod();
    return product.operation();
  }
}

export class ConcreteProductACreator extends Creator {
  factoryMethod() {
    return new ConcreteProductA();
  }
}

export class ConcreteProductBCreator extends Creator {
  factoryMethod() {
    return new ConcreteProductB();
  }
}
