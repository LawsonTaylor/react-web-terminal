import { observable } from 'mobx';
import {  PathModel, HistoryModel } from 'app/models';

export class TermStateStore {
  constructor() {
    this.user = 'guests';
  }

  @observable public user: string;
  @observable public history: HistoryModel[];
  @observable public path: PathModel;

}

export default TermStateStore;
