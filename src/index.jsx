import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers/index';
import App from './components/App';

let store = createStore(todo);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
