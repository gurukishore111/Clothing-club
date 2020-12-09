import React, { useState } from 'react'
import "./sign-up.styles.scss";
import FromInput from './../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { auth,createUserProfileDocument } from '../../firebases/firebase.utils';


 const Signup = () => {
    const [userData, setuserData] = useState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
    })
   const handleSubmit = async e =>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = userData;
        if(password !== confirmPassword){
            alert("password don't match")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            createUserProfileDocument(user,{displayName});
            setuserData({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
            })
        } catch (error) {
            alert(error.message)
        }
    } 

    const handleChange = e =>{
        const { name , value} = e.target;
        setuserData({...userData,[name] : value })
    }

        const {displayName,email,password,confirmPassword} = userData;
        return (
            <div className="sign-in">
            <h2>I do not have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FromInput name="displayName" type="text" label="User Name" value={displayName} handleChange={handleChange} required />
                <FromInput name="email"  type="email" label="Email" value={email} handleChange={handleChange} required />
                <FromInput name="password"  type="password" label="Password" value={password} required handleChange={handleChange} />
                <FromInput name="confirmPassword" type="password" label="Confirm Password" value={confirmPassword} required handleChange={handleChange} />
                <div className="buttons">
                <CustomButton type="submit">Sign up</CustomButton>
                </div>
            </form>
        </div>
        )
    }


export default Signup;