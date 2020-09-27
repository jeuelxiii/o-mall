import { ADD_TO_CART } from './cartTypes'

export const addToCart = (number = 1) => {
    return {
        type: ADD_TO_CART,
        payload: number
    }
}

