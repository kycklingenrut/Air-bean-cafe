const initState = {
  user: [],
};

export const userReducers = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "RESET_USER":
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};
