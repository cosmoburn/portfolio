import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <App/>
    </ScrollToTop>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
