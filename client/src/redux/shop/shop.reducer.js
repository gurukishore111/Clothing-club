import SHOP_DATA from './../../pages/shoppage/shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE ={
    collections:null
}

const shopReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
    case ShopActionTypes.UPDATE_COLLECTION:
        return{
          ...state,
          collections:action.payload  
        }
        default:
            return state
    }
};

export default shopReducer;