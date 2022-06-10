export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const addCartItem = (item) => {
  return {
    type: ADD_CART_ITEM,
    payload: item,
  };
};

export const deleteCartItem = (id) => {
  return {
    type: DELETE_CART_ITEM,
    payload: { id },
  };
};
