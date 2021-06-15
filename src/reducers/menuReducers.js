const initState = {
  menu: [],
  cart: [],
};
export const menuReducers = (state = initState, action) => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...state,
        menu: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
