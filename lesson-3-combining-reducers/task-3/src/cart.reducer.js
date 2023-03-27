import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  products: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newList = state.products.concat(
        action.payload.productData
      );
      return {
        ...state,
        products: newList
      };
    }
    case REMOVE_PRODUCT: {
      const newList = state.products.filter(
        product => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: newList
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
