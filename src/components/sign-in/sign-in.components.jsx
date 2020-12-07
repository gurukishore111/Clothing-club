import React, { Component } from 'react'
import "./sign-in.styles.scss";
import FromInput from './../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { auth, signInwithGoogle } from './../../firebases/firebase.utils';

export default class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
          email:'',
          password:''
        }
    }
    handleSubmit = async e =>{
        e.preventDefault();
        const {email,password} = this.state;
        try {
         await auth.signInWithEmailAndPassword(email,password); 
         this.setState({email:'',password:''})
        } catch (error) {
         alert(error.message)
        }
    }
    handleChange = e =>{
        const {value,name} = e.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FromInput name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange} required />
                    <FromInput name="password" type="password" label="Password" value={this.state.password} required handleChange={this.handleChange} />
                    <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInwithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
