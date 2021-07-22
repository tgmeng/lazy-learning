export class Deployer {
  private static _instance: Deployer | null = null;

  static getInstance() {
    if (this._instance === null) {
      this._instance = new Deployer();
    }
    return this._instance;
  }

  deploy(targetFile: string) {}
}

class Deployment {
  deploy(targetFile: string) {
    // 不好 Mock
    Deployer.getInstance().deploy(targetFile);
  }
}
