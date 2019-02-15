import React, {Component} from 'react'
import FirebaseService from '../../services/firebaseService'

class ListUser extends Component {
    constructor(props){
       super(props)
       this.state = {
           data: []
       }
       this.getUsers = this.getUsers.bind(this)

       this.getUsers()
    }

    getUsers() {
        FirebaseService.getDataList('users', (dataReceived) => this.setState({data: dataReceived}))
    }
 
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <ul>
                        {
                            this.state.data.map((item, index) => <li>
                                { item.name }
                            </li>)
                        }
                    </ul>
                </header>
            </div>
        );
    }
 }
 export default ListUser;