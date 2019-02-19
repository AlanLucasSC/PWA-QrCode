import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class LinkNavigation extends Component {
    render(){
        return (
            <li className="nav-item">
                <Link className="nav-link" to={ this.props.href }> { this.props.children } </Link>
            </li>
        )
    }
}

export default LinkNavigation