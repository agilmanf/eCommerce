const initialState = false;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return action.payload;
    default:
      return state;
  }
};

export default cartReducer;
