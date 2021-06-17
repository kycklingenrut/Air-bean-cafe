export const setMenu = (menu) => {
  return {
    type: "SET_MENU",
    payload: menu,
  };
};

export const incrementCart = (item) => {
  return {
    type: "INCREMENT_CART",
    payload: item,
  };
};

export const decrementCart = (index) => {
  return {
    type: "DECREMENT_CART",
    payload: index,
  };
};

export const resetCart = (payload) => {
  return { type: "RESET_CART", payload: payload };
};
