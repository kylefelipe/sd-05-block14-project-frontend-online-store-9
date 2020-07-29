import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductList from './pages/ProductList';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
