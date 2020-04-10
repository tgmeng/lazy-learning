import { Deployer } from './cons';
import { AssertionError } from 'assert';

// 依赖注入
export class Deployment {
  private _deployer: Deployer;

  constructor(aDeployer: Deployer) {
    this._deployer = aDeployer;
  }

  deploy(targetFile: string) {
    this._deployer.deploy(targetFile);
  }
}

export class GoodsService {
  query() {}
}

export class SQLiteGoodsService {
  query() {
    console.log('goods from sqlite');
  }
}

export class WebGoodsService {
  query() {
    console.log('goods from web');
  }
}

export class GoodsServiceLocator {
  private static _instance: GoodsService | null = new GoodsService();

  static getInstance(): GoodsService | null {
    return this._instance;
  }

  static setInstance(instance: GoodsService | null) {
    this._instance = instance;
  }
}

export class AppToolbox {
  private static _instance: AppToolbox;

  static getInstance() {
    if (this._instance == null) {
      this._instance = new AppToolbox();
    }
    return this._instance;
  }

  private _components = new Map();

  getComponent(name: string) {
    return this._components.get(name);
  }

  registerComponent(name: string, component: any) {
    this._components.set(name, component);
  }

  deregisterComponent(componentName: string) {
    this._components.delete(componentName);
  }
}

export class FileSystemSingleInstance {
  private static _instantiated = false;

  constructor() {
    if (FileSystemSingleInstance._instantiated) {
      throw new Error('实例多啦!');
    }
    FileSystemSingleInstance._instantiated = true;
  }

  // 模拟下其他语言的销毁
  destructor() {
    FileSystemSingleInstance._instantiated = false;
  }
}

//  get it from the base class
class Log {
  write(path: string) {}
}

export class GameObject {
  protected getLog() {
    return GameObject._log;
  }

  private static _log: Log;
}

export class Enemy extends GameObject {
  doSomething() {
    this.getLog().write('test');
  }
}
