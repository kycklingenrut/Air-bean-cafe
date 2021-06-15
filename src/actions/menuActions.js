export const setMenu = (menu) => {
  return {
    type: "SET_MENU",
    payload: menu,
  };
};

export const setCart = (cart) => {
  return {
    type: "SET_CART",
    payload: cart,
  };
};
