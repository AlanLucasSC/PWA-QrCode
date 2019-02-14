import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from './logo.svg';
import './about.css';

class About extends Component {
   render() {
      return (
         <div className='App'>
            <header className='App-header'>
               <img src={logo} className='App-logo' alt='logo' />
               <h1 className='App-title'>Página de Sobre</h1>
            </header>
            <Link to="/qrcode">Ir para a página sobre \o/</Link>
            <p className='App-intro'>
               Exemplo de Página Sobre :)
            </p>
         </div>
      );
   }
}
export default About;