function newManually(Ctor) {
  const obj = Object.create(null);
  Object.setPrototypeOf(obj, Ctor.prototype);
  const ret = Ctor.call(obj);
  return typeof ret !== 'object' || ret === null ? obj : ret;
}

describe('new', () => {
  it('test', () => {
    function Test() {
      this.name = 'test';
    }
    Test.prototype.testFn = () => {
      return 'test';
    };
    const inst = newManually(Test);
    expect(inst.name).toBe('test');
    expect(typeof inst.testFn).toBe('function');
    expect(Object.getPrototypeOf(inst).constructor).toBe(Test);
  });
});
