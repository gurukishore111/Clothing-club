import React, { Component } from 'react'
import "./sign-up.styles.scss";
import FromInput from './../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { auth,createUserProfileDocument } from '../../firebases/firebase.utils';


export default class Signup extends Component {
    constructor(){
        super()
            this.state={
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
        }
    }
    handleSubmit = async e =>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("password don't match")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
            })
        } catch (error) {
            alert(error.message)
        }
    } 

    handleChange = e =>{
        const { name , value} = e.target;
        this.setState({[name] : value })
    }
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-in">
            <h2>I do not have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FromInput name="displayName" type="text" label="User Name" value={displayName} handleChange={this.handleChange} required />
                <FromInput name="email"  type="email" label="Email" value={email} handleChange={this.handleChange} required />
                <FromInput name="password"  type="password" label="Password" value={password} required handleChange={this.handleChange} />
                <FromInput name="confirmPassword" type="password" label="Confirm Password" value={confirmPassword} required handleChange={this.handleChange} />
                <div className="buttons">
                <CustomButton type="submit">Sign up</CustomButton>
                </div>
            </form>
        </div>
        )
    }
}
