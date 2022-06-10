import { ADD_CART_ITEM, DELETE_CART_ITEM } from "../actions/cart.action";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  function checkItemOnCart(item) {
    return state.find((i) => i.id === item.id);
  }

  function addItem(item) {
    if (checkStock(item)) {
      alert("Gagal menambahkan! pesanan anda lebih banyak dari pada stok");
      return state;
    }

    let newCartItem = state;
    if (checkItemOnCart(action.payload)) {
      newCartItem = state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    } else {
      action.payload.quantity = 1;
      action.payload.price = action.payload.prices.isDiscount
        ? action.payload.prices.discountPrice
        : action.payload.prices.actualPrice;
      newCartItem = [...state, action.payload];
    }

    alert("Berhasil menambahkan barang ke keranjang");
    return newCartItem;
  }

  function checkStock(item) {
    const itemOnCart = checkItemOnCart(item) || item;
    return itemOnCart.quantity >= itemOnCart.stock;
  }

  function deleteItem(id) {
    return state.filter((item) => item.id !== id);
  }

  switch (action.type) {
    case ADD_CART_ITEM: {
      const newCart = addItem(action.payload);
      return newCart;
    }
    case DELETE_CART_ITEM: {
      const newCart = deleteItem(action.payload.id);
      return newCart;
    }
    default:
      return state;
  }
};

export default cartReducer;
