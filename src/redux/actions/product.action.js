import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: [],
    });

    axios
      .get("https://my-json-server.typicode.com/agilmanf/eCommerce/products")
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_PRODUCTS,
          payload: [],
        });
      });
  };
};
