import React, { useState } from 'react'
import "./sign-in.styles.scss";
import FromInput from './../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { auth, signInwithGoogle } from './../../firebases/firebase.utils';

const SignIn = () => {
  
    const [userCrendentials, setUserCrendentials] = useState({
        email:'',
        password:'' 
    })
    const {email,password} = userCrendentials;


   const  handleSubmit = async e =>{
        e.preventDefault();
        try {
         await auth.signInWithEmailAndPassword(email,password); 
         setUserCrendentials({email:'',password:''})
        } catch (error) {
         alert(error.message)
        }
    }
    const handleChange = e =>{
        const {value,name} = e.target;
        setUserCrendentials({...userCrendentials,[name]:value})
    }
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FromInput name="email" type="email" label="Email" value={email} handleChange={handleChange} required />
                    <FromInput name="password" type="password" label="Password" value={password} required handleChange={handleChange} />
                    <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInwithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

export default SignIn;