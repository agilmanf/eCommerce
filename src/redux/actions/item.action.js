import axios from "axios";

export const GET_ITEMS = "GET_ITEMS";

export const getItems = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ITEMS,
      payload: [],
    });

    axios
      .get("")
      .then((res) => {
        dispatch({
          type: GET_ITEMS,
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_ITEMS,
          payload: [],
        });
      });
  };
};
