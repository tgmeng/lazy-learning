export interface Component {
  operation(): string;
}

export class ConcreteComponent implements Component {
  operation() {
    return 'ConcreteComponent';
  }
}

export class Decorator implements Component {
  component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation() {
    return this.component.operation();
  }
}

export class ConcreteDecoratorA extends Decorator {
  operation() {
    return `ConcreteDecoratorA(${this.component.operation()})`;
  }
}

export class ConcreteDecoratorB extends Decorator {
  operation() {
    return `ConcreteDecoratorB(${this.component.operation()})`;
  }
}
