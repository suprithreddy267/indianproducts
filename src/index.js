import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './registerServiceWorker';
import Products from './products';
import Naavbar from './navbar';
import Footerbar from './footerbar';
import AddProduct from './AddProduct';
import Categorypage from './categorypage';
import About from './about';
import Blog from './blog';

ReactDOM.render(<div>
  <Naavbar/>
  <Router>
      <div style={{padding:'30px',display:'block'}}>
        <Route exact path='/' component={Products} />
        <Route exact path='/about/us' component={About} />
        <Route exact path='/blog/page' component={Blog} />
        <Route exact path='/add' component={AddProduct} />
        <Route exact path='/:category' component={Categorypage} />
        
        
      </div>
  </Router>
  <br>
  </br>
  {/* <div style={{display:'block'}}><Footerbar/></div> */}
  
  </div>,
  document.getElementById('root')
);
serviceWorker.unregister();