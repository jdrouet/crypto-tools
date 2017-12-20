import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import TransactionsHistory from '../transactions-history/index.jsx'

export default () => (
  <Router>
    <div>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Route path="/" component={TransactionsHistory} />
    </div>
  </Router>
);
