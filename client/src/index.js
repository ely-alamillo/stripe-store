import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import './index.scss';
import 'grommet/scss/vanilla/index.scss';

import App from './App';

const element = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  element
);
