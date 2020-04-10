export class FileSystem {
  private static _instance: FileSystem | null = null;

  static getInstance() {
    if (this._instance === null) {
      if (process.env.MOCK) {
        this._instance = new MockFileSystem();
      } else {
        this._instance = new RealFileSystem();
      }
    }
    return this._instance;
  }

  readFile(path: string) {}
  writeFile(path: string, content: string) {}
}

export class RealFileSystem extends FileSystem {
  readFile(path: string) {
    console.log('real read', path);
  }
  writeFile(path: string, content: string) {
    console.log('real write', path, content);
  }
}

export class MockFileSystem extends FileSystem {
  readFile(path: string) {
    console.log('mock read', path);
  }
  writeFile(path: string, content: string) {
    console.log('mock write', path, content);
  }
}
