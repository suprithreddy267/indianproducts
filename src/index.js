import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './registerServiceWorker';
import Products from './products';
import Naavbar from './navbar';

ReactDOM.render(<div>
  <Naavbar/>
  <Router>
      <div>
        <Route exact path='/' component={Products} />
        <Route exact path='/add' component={App} />
      </div>
  </Router>
  </div>,
  document.getElementById('root')
);
serviceWorker.unregister();