describe('a == 1 && a == 2 && a == 3', () => {
  it('valueOf', () => {
    const a = {
      value: 1,
      valueOf() {
        return this.value++;
      }
    };
    expect(a == 1 && a == 2 && a == 3).toBe(true);
  });

  it('toString', () => {
    const a = {
      value: 1,
      toString() {
        return this.value++;
      }
    };
    expect(a == 1 && a == 2 && a == 3).toBe(true);
  });

  it('defineProperty', () => {
    let value = 1;
    Object.defineProperty(window, 'a', {
      get() {
        return value++;
      }
    });
    expect(a == 1 && a == 2 && a == 3).toBe(true);
  });

  it('toPrimitive', () => {
    const a = {
      value: 1,
      [Symbol.toPrimitive](hint) {
        return this.value++;
      }
    };
    expect(a == 1 && a == 2 && a == 3).toBe(true);
  });
});
