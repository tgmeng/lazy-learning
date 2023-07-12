export interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

export class Product1 {
  parts: string[] = [];
}

export class ConcreteBuilder1 implements Builder {
  private product: Product1 = new Product1();

  reset() {
    this.product = new Product1();
  }

  producePartA() {
    this.product.parts.push('A');
  }
  producePartB() {
    this.product.parts.push('B');
  }
  producePartC() {
    this.product.parts.push('C');
  }

  getProduct() {
    const product = this.product;
    this.reset();
    return product;
  }
}

export class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  buildMinimal() {
    this.builder.producePartA();
  }

  buildFull() {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}
