import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import QrCode from '../components/qrcode'
import About from '../components/about/about'
import ListUser from '../components/listTest'
import Initial from '../components/guest'
import Login from '../components/auth/login'
import Register from '../components/auth/register'

class Router extends Component {

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/PWA-QrCode/initial" exact={true} component={Initial} />
                <Route path="/PWA-QrCode/qrcode" component={QrCode} />
                <Route path="/PWA-QrCode/list" component={ListUser} />
                <Route path="/PWA-QrCode/about" component={About} />
                <Route path="/PWA-QrCode/login" component={Login} />
                <Route path="/PWA-QrCode/register" component={Register} />
                <Route path='*' component={Login} />
            </Switch>
        </ BrowserRouter>
    );
  }

}

export default Router;
