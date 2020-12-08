import React from 'react'
import CollectionOverview from './../../components/collection-overview/collection-overview.components';
import { Route } from 'react-router-dom';
import CategoryPage from '../collection/collection.components';

const ShopPage = ({match}) => {
    console.log(match)
    return (
      <div className="shop-page">
        <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      />
       </div>
)}


export default ShopPage;