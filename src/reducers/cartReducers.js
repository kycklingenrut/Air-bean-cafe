const initState = {
  cart: [],
  menu: [],
};
export const cartReducers = (state = initState, action) => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...state,
        menu: action.payload,
      };
    case "INCREMENT_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DECREMENT_CART":
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.payload),
      };
    case "RESET_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
