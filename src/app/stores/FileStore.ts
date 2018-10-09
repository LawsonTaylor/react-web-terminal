import { observable } from 'mobx';
import { FileModel } from 'app/models';

export class FileStore {
  constructor(defaultFs: FileModel) {
    this.fs = defaultFs;
  }

  @observable public fs: FileModel;

}

export default FileStore;
