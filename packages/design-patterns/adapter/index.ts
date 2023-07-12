export class Target {
  operation() {
    return 'hello world';
  }
}

export class Adaptee {
  getList(): string[] {
    return ['hello', 'world'];
  }
}

export class Adapter implements Target {
  adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  operation() {
    return this.adaptee.getList().join(' ');
  }
}
