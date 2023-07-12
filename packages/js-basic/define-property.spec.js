import { describe, it, expect, vi } from 'vitest';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

describe('Object.defineProperty', () => {
  // has neither of value, writable, get and set keys, it is treated as a data descriptor.

  it('immutable', () => {
    const descriptor = {
      value: 2,
      writable: true,
    };

    const obj = {};
    Object.defineProperty(obj, 'a', descriptor);

    let _descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
    expect(_descriptor.writable).toBe(true);
    expect(_descriptor.value).toBe(2);

    descriptor.value = 3;
    descriptor.writable = false;

    _descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
    expect(_descriptor.writable).toBe(true);
    expect(_descriptor.value).toBe(2);
  });

  it('accessor descriptors/data descriptor, 二选一', () => {
    // has both value or writable and get or set keys, an exception is thrown.
    expect(() => {
      Object.defineProperty({}, 'name', {
        value: 'test',
        writable: true,
        get() {},
        set() {},
      });
    }).toThrow();
  });

  it('enumerable', () => {
    const o = {};

    const symbolE = Symbol.for('e');
    const symbolF = Symbol.for('f');

    Object.defineProperty(o, 'a', {
      value: 1,
      enumerable: true,
    });

    Object.defineProperty(o, symbolE, {
      value: 5,
      enumerable: true,
    });

    Object.defineProperty(o, symbolF, {
      value: 6,
      enumerable: false,
    });

    expect(Object.keys(o)).toContain('a');
    expect(Object.keys(o)).not.toContain(symbolE);
    expect(Object.keys(o)).not.toContain(symbolF);

    expect(o.propertyIsEnumerable(symbolE)).toBe(true);
    expect(o.propertyIsEnumerable(symbolF)).toBe(false);

    var p = { ...o };
    expect(p[Symbol.for('e')]).toBe(5);
    expect(p[Symbol.for('f')]).toBeUndefined();
  });

  it('configurable', () => {
    var o = {};
    Object.defineProperty(o, 'a', {
      get() {
        return 1;
      },
      configurable: false,
    });

    expect(() => {
      Object.defineProperty(o, 'a', {
        configurable: true,
      });
    }).toThrow();

    expect(() => {
      Object.defineProperty(o, 'a', {
        enumerable: true,
      });
    }).toThrow();

    expect(() => {
      Object.defineProperty(o, 'a', {
        writable: true,
      });
    }).toThrow();

    expect(() => {
      Object.defineProperty(o, 'a', {
        set() {},
      });
    }).toThrow();

    expect(() => {
      Object.defineProperty(o, 'a', {
        get() {
          return 1;
        },
      });
    }).toThrow();

    expect(() => {
      Object.defineProperty(o, 'a', {
        value: 12,
      });
    }).toThrow();

    delete o.a;
    expect(o.a).toBe(1);

    expect(() => {
      'use strict';
      delete o.a;
      expect(o.a).toBe(1);
    }).toThrow();
  });

  describe('data descriptors', () => {
    it('basic', () => {
      const objA = {};
      Object.defineProperty(objA, 'name', {
        value: 'test',
      });
      // value 默认 undefined
      expect(objA.value).toBeUndefined();

      const objB = {};
      Object.defineProperty(objB, 'name', {
        value: 'test',
      });

      // enumerable 默认 false
      expect(Object.keys(objB)).not.toContain('test');
      expect(objB.propertyIsEnumerable('name')).toBe(false);

      // writable 默认 false
      expect(objB.name).toBe('test');
      objB.name = 'test2';
      expect(objB.name).toBe('test');

      // strict 模式报错
      expect(() => {
        'use strict';
        objB.name = 'test2';
      }).toThrow();

      expect(() => {
        // configurable 默认 false
        Object.defineProperty(objB, 'name', {
          writable: true,
        });
      }).toThrow();
    });

    it('configurable = false and writable = true', () => {
      const o = {};

      Object.defineProperty(o, 'a', {
        value: 1,
        writable: true,
        configurable: false,
      });

      Object.defineProperty(o, 'a', {
        value: 2,
      });

      expect(o.a).toBe(2);

      expect(() => {
        Object.defineProperty(o, 'a', {
          writable: false,
        });

        expect(() => {
          Object.defineProperty(o, 'a', {
            value: 3,
          });
        }).toThrow();

        expect(o.a).toBe(2);
      }).not.toThrow();
    });

    it('configurable = false and writable = false', () => {
      const o = {};

      Object.defineProperty(o, 'a', {
        value: 1,
        writable: false,
        configurable: false,
      });

      expect(() => {
        Object.defineProperty(o, 'a', {
          value: 2,
        });
      }).toThrow();
      expect(o.a).toBe(1);

      expect(() => {
        Object.defineProperty(o, 'a', {
          writable: true,
        });
      }).toThrow();
      o.a = 2;
      expect(o.a).toBe(1);
    });

    it('non-writable value property is inherited', () => {
      function myclass() {}
      myclass.prototype.x = 1;

      Object.defineProperty(myclass.prototype, 'y', {
        writable: false,
        value: 1,
      });

      const a = new myclass();
      a.x = 2;
      expect(a.x).toBe(2);
      expect(myclass.prototype.x).toBe(1);

      a.y = 2;
      expect(a.y).toBe(1);
      expect(myclass.prototype.y).toBe(1);

      expect(() => {
        'use strict';
        a.y = 2;
      }).toThrow();
    });
  });

  describe('accessor descriptors', () => {
    it('basic', () => {
      const objA = {
        _name: 'test',
      };

      const mockGetter = vi.fn(function () {
        return this._name;
      });
      const mockSetter = vi.fn(function (value) {
        this._name = value;
      });

      // get, set 默认 undefined
      Object.defineProperty(objA, 'name', {
        get: mockGetter,
        set: mockSetter,
      });

      expect(objA._name).toBe('test');
      expect(objA.name).toBe('test');
      expect(mockGetter).toHaveBeenCalled();

      objA.name = 'test2';
      expect(mockSetter).toHaveBeenCalledWith('test2');
      expect(objA.name).toBe('test2');
      expect(objA._name).toBe('test2');
    });
  });
});
