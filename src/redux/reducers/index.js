import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import itemReducer from "./item.reducer";

export default combineReducers({ cartReducer, itemReducer });
