import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const Router = () => (
  <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/cart' component={CartPage}/>
  </Switch>
)

export default Router;