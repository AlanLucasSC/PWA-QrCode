import React, {Component} from 'react'


class Box extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default Box