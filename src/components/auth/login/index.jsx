import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { False, Void, InitialInput } from '../constant'

import { Body } from '../body'
import { Input } from '../input'
import { Submit } from '../submit'
import { Loading } from '../loading'

import { isEmail, isPassword } from '../utils'


class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoading: False,
            isEmail: Void,
            isPassword: Void,
            email: InitialInput,
            password: InitialInput
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
    } 

    emailChange(event){
        var email = event.target.value
        this.setState({
            email: email,
            isEmail: isEmail(email)
        });
    }

    passwordChange(event){
        var password = event.target.value
        this.setState({
            password: password,
            isPassword: isPassword(password)
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('baatata')
    }

    render(){
        return (
            <Body title="Login" onSubmit={ this.handleSubmit }>
                <Loading isLoading={ this.state.isLoading }>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email address"
                        onChange={ this.emailChange }
                        isValid={ this.state.isEmail }
                        invalidMessage="Insira um email válido"
                    >
                        Email address
                    </Input>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={ this.passwordChange }
                        isValid={ this.state.isPassword }
                        invalidMessage="Insira uma senha com no mínimo 8 caracteres"
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