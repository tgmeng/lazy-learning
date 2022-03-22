import {
  ConcreteProductA,
  ConcreteProductB,
  Product,
} from '../factory-method/product';

export class SimpleFactory {
  static createProduct(type: 'a' | 'b'): Product {
    switch (type) {
      case 'a':
        return new ConcreteProductA();
      case 'b':
      default:
        return new ConcreteProductB();
    }
  }
}
