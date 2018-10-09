import { observable, action } from 'mobx';
import { OutputModel, PathModel } from './index';

export class HistoryModel {
  constructor(
    command: string,
    args: string,
    output: OutputModel,
    cwd: PathModel,
    user: string
  ) {
    this.command = command;
    this.args = args;
    this.output = output;
    this.cwd = cwd;
    this.user = user;
  }
  
  @observable public command: string;
  @observable public args: string;
  @observable public output: OutputModel;
  @observable public cwd: PathModel;
  @observable public user: string;
}
export default HistoryModel;
