import { describe, it } from 'vitest';
import { Singleton, App } from '.';
import { FileSystem } from './subclass';
import { Deployer } from './cons';
import { FileSystemSingleInstance } from './solve';

describe('Singleton', () => {
  it('basic', () => {
    const instance = Singleton.getInstance();
    instance.doSomething();
  });

  it('static', () => {
    App.anotherInstance.doSomething();
  });

  it('subclass', () => {
    const fs = FileSystem.getInstance();
    fs.readFile('./a-file.txt');
  });

  it('网络错误', () => {
    try {
      // 不好 Mock Deployer, 除非改 Deployer 源码
      // Jest 还好, 其他语言蛋疼
      Deployer.getInstance().deploy('./a-file.txt');
    } catch (error) {
      // 报错
    }
  });

  it('手动保证实例', () => {
    new FileSystemSingleInstance();
  });
});
