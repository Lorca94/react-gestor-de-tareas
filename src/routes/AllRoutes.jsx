import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loginpage from '../pages/LoginPage';

const Allroutes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Loginpage} />
        </Switch>
      </BrowserRouter>
    );
};

export default Allroutes;
