export interface Prototype {
  clone(): Prototype;
}

export abstract class Shape implements Prototype {
  x: number;
  y: number;

  color: string;

  constructor(source?: Shape) {
    const { x = 0, y = 0, color = 'white' } = source || {};
    this.x = x;
    this.y = y;
    this.color = color;
  }

  abstract clone(): Prototype;
}

export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(source?: Rectangle) {
    super(source);
    const { width = 0, height = 0 } = source || {};
    this.width = width;
    this.height = height;
  }

  clone() {
    return new Rectangle(this);
  }
}

export class Circle extends Shape {
  radius: number;

  constructor(source?: Circle) {
    super(source);
    this.radius = source?.radius || 0;
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
