import React, { Component } from 'react';

import { firebaseDatabase } from '../../utils/firebaseUtils'
import './about.css';
import Guest from '../../container/guest'

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
         <Guest>
            <p>
               About
            </p>
         </Guest>
      );
   }
}
export default About;