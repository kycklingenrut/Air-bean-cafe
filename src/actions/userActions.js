export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const resetUser = (payload) => {
  return {
    type: "RESET_USER",
    payload: payload,
  };
};
