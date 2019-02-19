import React, { Component } from 'react'

import { Body } from '../body'
import { Input } from '../input'
import { Submit } from '../submit'

import { Link } from "react-router-dom";

class Register extends Component {
    render(){
        return (
            <Body title="Register">
                <Input
                    type="text"
                    id="name"
                    placeholder="Name"
                >
                    Name
                </Input>
                <Input
                    type="text"
                    id="rga"
                    placeholder="RGA"
                >
                    RGA
                </Input>
                <Input
                    type="email"
                    id="email"
                    placeholder="Email address"
                >
                    Email address
                </Input>
                <hr className="my-4"></hr>
                <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                >
                    Password
                </Input>
                <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirmar Password"
                >
                    Confirmar Password
                </Input>
                <hr className="my-4"></hr>
                <Submit> Register </Submit>
                <Link className="d-block text-center mt-2 small" to="/PWA-QrCode/login">Login</Link>
            </Body>
        )
    }
}

export default Register