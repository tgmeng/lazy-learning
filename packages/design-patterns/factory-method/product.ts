export interface Product {
  operation(): string;
}

export class ConcreteProductA implements Product {
  operation(): string {
    return 'ConcreteProductA';
  }
}

export class ConcreteProductB implements Product {
  operation(): string {
    return 'ConcreteProductB';
  }
}
