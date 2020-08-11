import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import initialState from './redux/initialState';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(reducers, initialState());

const Wrapper = () =>(
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Wrapper />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// serviceWorker.unregister();