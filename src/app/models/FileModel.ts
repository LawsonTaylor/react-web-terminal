import { observable, action } from 'mobx';

export class FileModel {
  readonly id: number;
  @observable public name: string;
  @observable public children?: FileModel[];
  @observable public data?: string;
  
  // touch must make data = '', mkdir must make children = []; 
  constructor(name, data = null, children = null) {
    this.id = FileModel.generateId();
    this.name = name;
    this.children = children;
  }

  static nextId = 1;
  static generateId() {
    return this.nextId++;
  }

  @action
  addFile = (item: Partial<FileModel>): void => {
    if(this.data != null) {
      throw new Error('This is a file!')
    }
    this.children.push(new FileModel(item.name, item.data));
  };

  @action
  addData = (item: Partial<FileModel>): void => {
    if(this.children != null) {
      throw new Error('This is a Directory!')
    }
    this.children.push(new FileModel(item.name, item.data));
  };

}

export default FileModel;
