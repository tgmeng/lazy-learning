export interface Prototype {
  clone(): Prototype;
}

export abstract class Shape implements Prototype {
  x: number;
  y: number;

  color: string;

  constructor(source?: Shape) {
    if (source) {
      this.x = source.x;
      this.y = source.y;
      this.color = source.color;
    }
  }

  abstract clone(): Prototype;
}

export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(source?: Rectangle) {
    super(source);
    if (source) {
      this.width = source.width;
      this.height = source.height;
    }
  }

  clone() {
    return new Rectangle(this);
  }
}

export class Circle extends Shape {
  radius: number;

  constructor(source?: Circle) {
    super(source);
    if (source) {
      this.radius = source.radius;
    }
  }

  clone() {
    return new Circle(this);
  }
}

export class PrototypeRegistry {
  items = new Map<string, Prototype>();

  addItem(id: string, p: Prototype) {
    this.items.set(id, p);
  }

  getById(id: string) {
    return this.items.get(id)?.clone();
  }
}
