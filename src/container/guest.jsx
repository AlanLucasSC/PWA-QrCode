import React, {Component} from 'react'

import Navigation from '../components/navigation/navigation'
import LinkNavigation from '../components/navigation/link'
import GuestHeader from '../components/header/guest'

class Guest extends Component {

    render(){
        return (
            <div>
                <Navigation>
                    <LinkNavigation href="/PWA-QrCode/qrcode"> QrCode </LinkNavigation>
                    <LinkNavigation href="/PWA-QrCode/list"> Lista </LinkNavigation>
                </Navigation>
                <GuestHeader/>
                { this.props.children }
            </div>
        )
    }
}

export default Guest