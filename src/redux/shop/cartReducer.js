import { ADD_TO_CART } from './cartTypes'


const initialState = {
    cartCount: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: return{
            ...state,
            cartCount: state.cartCount + action.payload
        }

        default: return state
    }
}

export default cartReducer;