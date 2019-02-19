import React, {Component} from 'react'

class Card extends Component {
    render(){
        return (
            <div className="post-preview">
                <a href="#">
                    <h2 className="post-title">
                        { this.props.title }
                    </h2>
                    <h3 className="post-subtitle">
                        { this.props.subtitle }
                    </h3>
                </a>
                <p className="post-meta">
                    Postado por <a href="#">{ this.props.author }</a> em { this.props.date }
                </p>
            </div>
        )
    }
}

export default Card