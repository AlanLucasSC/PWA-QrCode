import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import QrCode from '../components/qrcode'
import About from '../components/about/about'

class Router extends Component {

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={About} />
                <Route path="/qrcode" component={QrCode} />
                <Route path='*' component={About} />
            </Switch>
        </ BrowserRouter>
    );
  }

}

export default Router;
