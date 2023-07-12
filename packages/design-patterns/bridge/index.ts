export class Abstraction {
  protected implement: Implementation;

  constructor(implement: Implementation) {
    this.implement = implement;
  }

  operation() {
    return `Hello ${this.implement.operationImplement()}`;
  }
}

export class ExtendedAbstraction extends Abstraction {
  operation() {
    return `Hello and bye ${this.implement.operationImplement()}`;
  }
}

export interface Implementation {
  operationImplement(): string;
}

export class ConcreteImplementationA implements Implementation {
  operationImplement() {
    return 'ConcreteImplementationA';
  }
}

export class ConcreteImplementationB implements Implementation {
  operationImplement() {
    return 'ConcreteImplementationB';
  }
}
