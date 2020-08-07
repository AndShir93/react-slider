import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { render } from 'node-sass';
import rootReducer from './redux/rootReducer';
import createStore from './redux/createStore';

const store = createStore(rootReducer, 0)

// ReactDOM.render(
//   <React.StrictMode>
//   <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const app = (
  <Provider store={store}>
      <App />
  </Provider>
)
render(app, document.getElementById('root'));

serviceWorker.unregister();
