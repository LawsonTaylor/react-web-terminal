import { History } from 'history';
import { FileModel} from 'app/models';
import { FileStore } from './FileStore';
import { RouterStore } from './RouterStore';
import { STORE_FILE, STORE_ROUTER } from 'app/constants';

export function createStores(history: History, defaultFS?: FileModel) {
  const fileStore = new FileStore(defaultFS);
  const routerStore = new RouterStore(history);
  return {
    [STORE_FILE]: fileStore,
    [STORE_ROUTER]: routerStore
  };
}
