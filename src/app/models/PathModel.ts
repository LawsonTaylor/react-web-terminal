import { observable, action } from 'mobx';
import { FileModel } from './FileModel';

export class PathModel {
  constructor(
    directory: FileModel,
  ) {
    this.directory = directory;
  }
  
  @observable public directory: FileModel;
  @observable public child: PathModel;

  

}
export default PathModel;