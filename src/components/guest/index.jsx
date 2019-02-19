import React, {Component} from 'react'

import FirebaseService from '../../services/firebaseService'
import Guest from '../../container/guest'
import Box from '../box/boxPost'
import Card from '../box/cardPost'

class Initial extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: []
        }

        this.getPosts = this.getPosts.bind(this)
 
        this.getPosts()
    }

    getPosts() {
        FirebaseService.getDataList('posts', (dataReceived) => {
            this.setState({data: dataReceived})
        })
    }

    render(){
        return (
            <Guest>
                <Box>
                    <div className="row">
                        {
                            this.state.data.map(
                                (post, index) => 
                                <div key={index} className="col-md-6">
                                    <Card
                                        title={post.title}
                                        subtitle={ post.subtitle ? post.subtitle : '' }
                                        author={post.author}
                                        date={post.date}
                                    />
                                </div>
                            )
                        }
                    </div>
                </Box>
            </Guest>
        )
    }
}

export default Initial