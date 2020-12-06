import React, { Component } from 'react'
import SignIn from './../../components/sign-in/sign-in.components';
import Signup from './../../components/sign-up/sign-up.components';
import"./sign-in-and-sign-up.styles.scss";

export default class SignInAndSignUpPage extends Component {
    render() {
        return (
            <div className="sign-in-and-sign-up">
              <SignIn />
              <Signup />  
            </div>
        )
    }
}
