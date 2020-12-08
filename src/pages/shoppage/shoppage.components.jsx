import CollectionOverview from './../../components/collection-overview/collection-overview.components';
import { Route } from 'react-router-dom';
import React, { Component } from 'react'
import { firestore } from '../../firebases/firebase.utils';
import { convertCollectionSnapShotToMap } from './../../firebases/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';


 class ShopPage extends Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
       // console.log(this.props)
     const { updateCollections } = this.props
     const collectionRef = firestore.collection('collection')
     collectionRef.onSnapshot(async snapshot =>{
      const collectionMap =  convertCollectionSnapShotToMap(snapshot)
      updateCollections(collectionMap);
     })
    }

    render() {
        const {match} = this.props
        return (
            <div>
         <div className="shop-page">
        <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
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
