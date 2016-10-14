import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers';
import {Router, Route, hashHistory} from 'react-router';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/(:filter)" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
