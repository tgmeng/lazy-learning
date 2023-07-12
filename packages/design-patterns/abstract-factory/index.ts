export interface ProductA {
  operationA(): string;
}

export interface ProductB {
  operationB(): string;
}

export interface AbstractFactory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}

export class ConcreteProductA1 implements ProductA {
  operationA() {
    return 'ConcreteProductA1';
  }
}

export class ConcreteProductB1 implements ProductB {
  operationB() {
    return 'ConcreteProductB1';
  }
}

export class ConcreteFactory1 implements AbstractFactory {
  createProductA() {
    return new ConcreteProductA1();
  }
  createProductB() {
    return new ConcreteProductB1();
  }
}

export class ConcreteProductA2 implements ProductA {
  operationA() {
    return 'ConcreteProductA2';
  }
}

export class ConcreteProductB2 implements ProductB {
  operationB() {
    return 'ConcreteProductB2';
  }
}

export class ConcreteFactory2 implements AbstractFactory {
  createProductA() {
    return new ConcreteProductA2();
  }
  createProductB() {
    return new ConcreteProductB2();
  }
}
