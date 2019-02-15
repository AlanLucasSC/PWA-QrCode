import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { firebaseDatabase } from '../../utils/firebaseUtils'
import logo from './logo.svg';
import './about.css';

class About extends Component {
   constructor(props){
      super(props)
      this.pushData = this.pushData.bind(this)
      this.remove = this.remove.bind(this)
      /*
      this.pushData('users', {
         name: 'alan',
         password: '68745985'
      })
      this.remove('-LYn-EB4LBXg-9I0YslU', 'users')
      */
   }

   pushData = (node, objToSubmit) => {
      const ref = firebaseDatabase.ref(node).push();
      const id = firebaseDatabase.ref(node).push().key;
      ref.set(objToSubmit);
      return id;
  };

   remove = (id, node) => {
      return firebaseDatabase.ref(node + '/' + id).remove();
   };

   render() {
      return (
         <div className='App'>
            <header className='App-header'>
               <img src={logo} className='App-logo' alt='logo' />
               <h1 className='App-title'>Página de Sobre</h1>
               <h2 className='App-title'> Link do github https://github.com/AlanLucasSC/PWA-QrCode </h2>
               <Link to="/PWA-QrCode/qrcode">Ir para a página sobre \o/</Link>
               <Link to="/PWA-QrCode/list">Lista de usuarios</Link>
               <button
                  type='button'
                  onClick={() => {
                     // context.history.push === history.push
                     this.props.history.push('/PWA-QrCode/list')
                  }}
               >
                  Lista de usuarios
               </button>
            </header>
         </div>
      );
   }
}
export default About;