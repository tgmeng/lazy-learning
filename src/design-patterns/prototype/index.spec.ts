import { Circle, Rectangle, PrototypeRegistry } from './index';

describe('Prototype', () => {
  it('basic', () => {
    const circle = new Circle();

    circle.x = 10;
    circle.y = 20;
    circle.radius = 15;
    circle.color = 'red';

    const clonedCircle = circle.clone();

    expect(clonedCircle).not.toBe(circle);
    expect(clonedCircle).toEqual(circle);
  });

  it('PrototypeRegistry', () => {
    const registry = new PrototypeRegistry();

    const rect = new Rectangle();
    rect.x = 10;
    rect.y = 20;
    rect.color = 'red';
    rect.width = 10;
    rect.height = 10;

    registry.addItem('test', rect);

    const neoRect = registry.getById('test');

    expect(neoRect).not.toBe(rect);
    expect(neoRect).toEqual(rect);
  });
});
