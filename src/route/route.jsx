import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import QrCode from '../components/qrcode'
import About from '../components/about/about'
import ListUser from '../components/listTest'

class Router extends Component {

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/PWA-QrCode/" exact={true} component={About} />
                <Route path="/PWA-QrCode/qrcode" component={QrCode} />
                <Route path="/PWA-QrCode/list" component={ListUser} />
                <Route path='*' component={About} />
            </Switch>
        </ BrowserRouter>
    );
  }

}

export default Router;
