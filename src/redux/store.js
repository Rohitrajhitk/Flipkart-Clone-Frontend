import {createStore , combineReducers , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    getProducts : getProductsReducer ,
    getProductDetails : getProductDetailsReducer
});

const midddleware = [thunk]

const store = createStore(
    reducer , 
    composeWithDevTools(applyMiddleware(...midddleware))
)

export default store;