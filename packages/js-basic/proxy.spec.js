describe('proxy', () => {
  it('Reflect.get with receive', () => {
    const target = {
      get foo() {
        return this.bar;
      },
      bar: 3
    };

    const handler = {
      get(target, propertyKey, receiver) {
        if (propertyKey === 'bar') return 2;

        expect(Reflect.get(target, propertyKey, receiver)).toBe(2); // this in foo getter references Proxy instance; logs 2
        expect(target[propertyKey]).toBe(3); // this in foo getter references "target" - logs 3
      }
    };

    const obj = new Proxy(target, handler);
    obj.foo;
  });
});
