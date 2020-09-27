import { createStore } from 'redux'
import cartReducer from './shop/cartReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(cartReducer, composeWithDevTools())

export default store;