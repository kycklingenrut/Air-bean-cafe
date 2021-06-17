import { cartReducers } from "./cartReducers";
// import { menuReducers } from "./menuReducers";
import { userReducers } from "./userReducers";
import { combineReducers } from "redux";

//Detta behövs egentligen inte för inlämningsuppgiften men ifall man vill kombinera flera
//reducers behöver man använde combineReducers nedan
const reducer = combineReducers({
  cart: cartReducers,
  user: userReducers,
});

export default reducer;
