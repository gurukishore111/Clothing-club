import CollectionOverview from './../../components/collection-overview/collection-overview.components';
import { Route, Router } from 'react-router-dom';
import React, { Component } from 'react'
import { firestore } from '../../firebases/firebase.utils';
import { convertCollectionSnapShotToMap } from './../../firebases/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';
import {WithSpinner} from './../../components/with-spinner/with-spinner.components';
import CollectionPage from './../collection/collection.components';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageSpinner = WithSpinner(CollectionPage);

 class ShopPage extends Component {
    state ={
        loading:true
    };
    unsubscribeFromSnapshot = null;

    componentDidMount(){
       // console.log(this.props)
     const { updateCollections } = this.props
     const collectionRef = firestore.collection('collection');
      collectionRef.onSnapshot(async snapshot =>{
      const collectionMap =  convertCollectionSnapShotToMap(snapshot)
      updateCollections(collectionMap);
      this.setState({loading:false});
     })
    }
 
    render() {
        const {match} = this.props
        const {loading} = this.state;
        console.log(match.path)
        return (
        <div>
         <div className="shop-page">
        <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
       />
       <Route
        path="/shop/:collectionId"
        render={(props) => <CollectionPageSpinner isLoading={loading} {...props} />}
       />
       </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
  updateCollections:collectionMap =>
  dispatch(updateCollections(collectionMap))  
})

export default connect(null,mapDispatchToProps)(ShopPage);
