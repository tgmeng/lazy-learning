import { ConcretePrototype } from './';

describe('Prototype', () => {
  it('should work', () => {
    const proto = new ConcretePrototype('test');
    const clonedProto = proto.clone();

    expect(proto).not.toBe(clonedProto);
    expect(proto.id).toBe(clonedProto.id);
    expect(proto.component).not.toBe(clonedProto.component);
    expect(proto.component.proto).toBe(clonedProto.component.proto);
  });
});
