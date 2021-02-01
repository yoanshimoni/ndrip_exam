import createDateContext from "./createDataContext";

const userReducer = (state, action) => {
  switch (action.type) {
    case "get_items": {
      return { ...state, products: action.payload };
    }
    default:
      return state;
  }
};

export const { Context, Provider } = createDateContext(
  userReducer,
  {},
  { users: [], posts: [] }
);
