import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shoppage.components';
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth, createUserProfileDocument } from './firebases/firebase.utils';
import { connect } from 'react-redux';
import { setCurentUser } from './redux/user/user.action';


 class App extends Component { 
  unsubscribeFromAuth = null; 
  
  componentDidMount(){
    const { setCurentUser } = this.props
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurentUser({
              id:snapShot.id,
              ...snapShot.data()
          });
          console.log(this.state)
        })
      }
      setCurentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
      <Header />
      <Switch>   
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" render={() =>this.props.currentUser ? < Redirect to="/" /> : <SignInAndSignUpPage />} />
      </Switch>
    </div>
    )
  }
}

const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
})
const mapDispatchToProps = dispatch =>  ({
  setCurentUser : user =>dispatch(setCurentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);