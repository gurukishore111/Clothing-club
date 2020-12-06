import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shoppage.components';
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth } from './firebases/firebase.utils';

export default class App extends Component {
  constructor(){
    super();

    this.state={
      currentUser:null,
    }
  }
 
  unsubscribeFromAuth = null; 
  
  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>   
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
    )
  }
}

