import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { FileModel } from 'app/models';
import { createStores } from 'app/stores';
import { App } from 'app';

// enable MobX strict mode
useStrict(true);

// default fixtures for TodoStore
const documents = [
  new FileModel('test_file.txt', 'this is a test file.'),
  new FileModel('test2.txt', 'this is the second test'),
]

const base = [
  new FileModel('Documents', null, [documents]),
  new FileModel('Pictures', null, []),
  new FileModel('Games', null, []),
  new FileModel('resume.txt', 'this is a great resume'),
]

const fsRoot = new FileModel('~', null, base);

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history, fsRoot);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
