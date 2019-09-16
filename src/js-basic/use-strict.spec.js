describe('use strict', () => {
  it('implements, interface, let, package, private, protected, public, static, and yield are reserved words within strict mode code', () => {
    'use strict';
    // throw SyntaxError:
    // const implements = 0;
    // const interface = 0;
  });

  it('the syntax of NumericLiteral to include LegacyOctalIntegerLiteral, nor extend the syntax of DecimalIntegerLiteral to include NonOctalDecimalIntegerLiteral', () => {
    'use strict';
    const b = 0o010;

    expect(b).toBe(8);

    // throw SyntaxError:
    // const a = 010;
  });

  it('may not extend the syntax of EscapeSequence to include LegacyOctalEscapeSequence', () => {
    'use strict';

    // throw SyntaxError:
    // const a = '\2';
    // const a = '\71';
    // const a = '\311';

  });

  it('Assignment to an undeclared identifier or otherwise unresolvable reference does not create a property in the global object. When a simple assignment occurs within strict mode code, its LeftHandSideExpression must not evaluate to an unresolvable Reference. If it does a ReferenceError exception is thrown. The LeftHandSideExpression also may not be a reference to a data property with the attribute value { [[Writable]]: false }, to an accessor property with the attribute value { [[Set]]: undefined }, nor to a non-existent property of an object whose [[Extensible]] internal slot has the value false. In these cases a TypeError exception is thrown ', () => {
    'use strict';

    expect(() => {
      a = 'a';
    }).toThrow(ReferenceError);

    expect(() => {
      const obj = {};
      Object.defineProperty(obj, 'a', {
        value: 1,
        writable: false
      });
      expect(obj.a).toBe(1);
      obj.a = 2;
    }).toThrow(TypeError);

    expect(() => {
      const obj = {};
      Object.defineProperty(obj, 'a', {
        get: () => 1
      });
      expect(obj.a).toBe(1);
      obj.a = 2;
    }).toThrow(TypeError);

    expect(() => {
      const obj = {};
      Object.preventExtensions(obj);
      obj.a = 2;
    }).toThrow(TypeError);
  });

  it('An IdentifierReference with the StringValue "eval" or "arguments" may not appear as the LeftHandSideExpression of an Assignment operator or of an UpdateExpression or as the UnaryExpression operated upon by a Prefix Increment or a Prefix Decrement operator.', () => {
    'use strict';

    // throw SyntaxError
    // const eval = 0;
    // const arguments = 0;
    // eval++;
    // --eval;

  });

  it('Arguments objects for strict functions define a non-configurable accessor property "callee" which throws a TypeError exception on access', () => {
    'use strict';

    expect(() => {
      function test() {
        return arguments.callee;
      }

      test();
    }).toThrow(TypeError);
  });

  it('Arguments objects for strict functions do not dynamically share their array-indexed property values with the corresponding formal parameter bindings of their functions.', () => {
    function f(a) {
      a = 2;
      return [a, arguments[0]];
    }
    expect(f(1)).toEqual([2, 2]);

    function strictF(a) {
      'use strict';
      a = 2;
      return [a, arguments[0]];
    }
    expect(strictF(1)).toEqual([2, 1]);
  });

  it('For strict functions, if an arguments object is created the binding of the local identifier arguments to the arguments object is immutable and hence may not be the target of an assignment expression', () => {
    'use strict';
    // ?: WTF
  });

  it('It is a SyntaxError if the StringValue of a BindingIdentifier is "eval" or "arguments" within strict mode code', () => {
    'use strict';

    // throw SyntaxError
    // const { eval } = obj;
    // const test = function (eval) {}
    // for(const eval in {}) {}
    // const { arguments } = obj;

  });

  it('Strict mode eval code cannot instantiate variables or functions in the variable environment of the caller to eval. Instead, a new variable environment is created and that environment is used for declaration binding instantiation for the eval code', () => {
    expect(() => {
      'use strict';
      eval('var a = 2;');
      expect(a).toBe(2);
    }).toThrow(ReferenceError);

    expect(() => {
      eval("'use strict'; var a = 2;");
      expect(a).toBe(2);
    }).toThrow(ReferenceError);
  });

  it('If this is evaluated within strict mode code, then the this value is not coerced to an object. A this value of undefined or null is not converted to the global object and primitive values are not converted to wrapper objects. The this value passed via a function call (including calls made using Function.prototype.apply and Function.prototype.call) do not coerce the passed this value to an object (9.2.1.2, 19.2.3.1, 19.2.3.3).', () => {
    function test() {
      return this;
    }

    function strictTest() {
      'use strict';
      return this;
    }

    expect(test()).toBe(global);
    expect(strictTest()).toBe(undefined);
    expect(test.call(null)).toBe(global);
    expect(test.call(undefined)).toBe(global);
    expect(strictTest.call(undefined)).toBe(undefined);
    expect(strictTest.call(null)).toBe(null);

    expect(typeof test.call(1)).toBe('object');
    expect(typeof strictTest.call(1)).toBe('number');
  });

  it('When a delete operator occurs within strict mode code, a SyntaxError is thrown if its UnaryExpression is a direct reference to a variable, function argument, or function name', () => {
    'use strict';

    // throw SyntaxError
    // const a = 1;
    // delete a;

    // const b = function() {}
    // delete b;

    // function test(arg) {
    //   delete arg;
    // }

  });

  it('When a delete operator occurs within strict mode code, a TypeError is thrown if the property to be deleted has the attribute { [[Configurable]]: false }', () => {
    'use strict';

    expect(() => {
      const obj = {};
      Object.defineProperty(obj, 'test', {
        value: '1',
        configurable: false
      });

      delete obj.test;
    }).toThrow(TypeError);
  });

  it('Strict mode code may not include a WithStatement. The occurrence of a WithStatement in such a context is a SyntaxError ', () => {
    'use strict';

    // throw SyntaxError
    // const obj = {
    //   name: 'test'
    // };

    // with(obj) {
    //   expect(name).toBe('test');
    // }

  });

  it('It is a SyntaxError if a CatchParameter occurs within strict mode code and BoundNames of CatchParameter contains either eval or arguments ', () => {
    'use strict';

    // throw SyntaxError
    // try {
    // } catch (eval) {

    // try {
    // } catch (arguments) {
    // }

  });

  it('It is a SyntaxError if the same BindingIdentifier appears more than once in the FormalParameters of a strict function. An attempt to create such a function using a Function, Generator, or AsyncFunction constructor is a SyntaxError', () => {
    function test(a, a, b) {
      return [a, b];
    }
    expect(test(1, 2, 3)).toEqual([2, 3]);

    // throw SyntaxError
    // function strictTest(a, a, b) {
    //   'use strict';
    //   return [a, b];
    // }
  });

  it('An implementation may not extend, beyond that defined in this specification, the meanings within strict functions of properties named caller or arguments of function instances', () => {
    // 'use strict';
  });
});
