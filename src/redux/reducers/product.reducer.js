import { GET_PRODUCTS } from "../actions/product.action";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
