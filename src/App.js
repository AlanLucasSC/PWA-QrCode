import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import QrCode from './components/qrcode'


class App extends Component {

  render() {
    return (
      <QrCode></QrCode>
    );
  }

}

export default App;
