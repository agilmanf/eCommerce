import { GET_ITEMS } from "../actions/item.action";

const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default itemReducer;
