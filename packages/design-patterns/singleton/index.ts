export class Singleton {
  private static _instance: Singleton | null = null;

  static getInstance() {
    if (this._instance === null) {
      this._instance = new Singleton();
    }
    return this._instance;
  }

  doSomething() {
    console.log('do something');
  }

  /** ... */
}

export class StaticSingleInstance {
  doSomething() {
    console.log('static do something');
  }
}

export class AnotherStaticSingleInstance {
  doSomething() {
    console.log('static another do something');
  }
}

export class App {
  static instance = new StaticSingleInstance();
  static anotherInstance = new AnotherStaticSingleInstance();
}

// export class App2 {
//   private static _instance: App = null;

//   static getInstance() {
//     if (this._instance === null) {
//       this._instance = new App();
//     }
//     return this._instance;
//   }

//   getLog() {
//     return this._log;
//   }
//   getFileSystem() {
//     return this._fileSystem;
//   }

//   private _log: Log;
//   private _fileSystem: FileSystem;
// }
