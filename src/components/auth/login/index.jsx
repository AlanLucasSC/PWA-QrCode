import React, { Component } from 'react'
import { Link } from "react-router-dom";

import {True, False} from '../constant'

import { Body } from '../body'
import { Input } from '../input'
import { Submit } from '../submit'
import { Loading } from '../loading'


class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoading: True
        }
    }
    render(){
        return (
            <Body title="Login">
                <Loading isLoading={ this.state.isLoading }>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email address"
                    >
                        Email address
                    </Input>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                    >
                        Password
                    </Input>
                    <hr className="my-4"></hr>
                    <Submit> Login </Submit>
                    <Link className="d-block text-center mt-2 small" to="/PWA-QrCode/register">Register</Link>
                </Loading>
            </Body>
        )
    }
}

export default Login