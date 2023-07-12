export interface Prototype {
  clone(): Prototype;
}

export class ConcretePrototype implements Prototype {
  id: string;
  component: ComponentWithBackReference;

  constructor(id: string) {
    this.id = id;
    this.component = new ComponentWithBackReference(this);
  }

  clone() {
    const cloned = new ConcretePrototype(this.id);
    cloned.component = new ComponentWithBackReference(this);
    return cloned;
  }
}

export class ComponentWithBackReference {
  proto: Prototype;

  constructor(proto: Prototype) {
    this.proto = proto;
  }
}
