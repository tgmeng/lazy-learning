import { Reflection } from 'reflect-metadata';

function dec() {
  console.log('desc factory');
  return (target: any, ...args: any[]) => {
    console.log('====');
    console.log('desc');
    console.log(target, ...args);
    console.log(
      Reflection.getMetadata('design:type', target),
      Reflection.getMetadata('design:paramtypes', target),
      Reflection.getMetadata('design:returntype', target)
    );
    console.log('====');
  };
}

function dec2() {
  console.log('desc2 factory');
  return (target: any, ...args: any[]) => {
    console.log('====');
    console.log('desc2');
    console.log(target, ...args);
    console.log(
      Reflection.getMetadata('design:type', target),
      Reflection.getMetadata('design:paramtypes', target),
      Reflection.getMetadata('design:returntype', target)
    );
    console.log('====');
  };
}

class B {}

// @dec()
class A {
  // @dec()
  a = 0;

  // @dec() @dec2() b = 0;

  constructor(options: B) {
    this.a = 1;
  }

  // @dec()
  // test(a: any): number {
  test(@dec() a: any): number {
    return 1;
  }

  // @dec()
  fuck(): string {
    return 'test';
  }
}

new A(new B());

export { A };
