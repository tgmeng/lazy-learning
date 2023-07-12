import { Circle, Rectangle, PrototypeRegistry } from './index';

describe('Prototype Registry', () => {
  it('basic', () => {
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
