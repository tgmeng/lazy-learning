// 协变与逆变
// https://www.stephanboyer.com/post/132/what-are-covariance-and-contravariance

interface Animal {
  sleep: () => void;
}

interface Dog extends Animal {
  run: () => void;
}

interface Greyhound extends Dog {
  drink: () => void;
}

interface GermanShepherd extends Dog {
  fuck: () => void;
}

function testDogRunningSpeed(createDog: (d: Dog) => Dog): number {
  const baseDog: GermanShepherd = {
    sleep() {},
    run() {},
    fuck() {}
  };
  const start = Date.now();

  let neoDog = createDog(baseDog);
  neoDog.run();

  return Date.now() - start;
}

let createDog = (dog: Greyhound) => {
  // Boom!
  // d 是 GermanShepherd, 但是却被认为是 Greyhound
  // GermanShepherd 没有 drink 方法
  dog.drink();
  return dog;
};

// error, when strictFunctionTypes = true
testDogRunningSpeed(createDog);
