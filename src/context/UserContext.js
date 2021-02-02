import createDateContext from "./createDataContext";
import usersApi from "../api/usersApi";

const userReducer = (state, action) => {
  switch (action.type) {
    case "get_users": {
      return { ...state, userList: action.payload };
    }
    case "get_posts": {
      return { ...state, postList: { ...state.postList, ...action.payload } };
    }
    case "remove_post": {
      return {
        userList: [...state.userList],
        postList: {
          ...state.postList,
          [action.payload.userId]: [
            ...state.postList[action.payload.userId].filter(
              (post) => post.id !== action.payload.postId
            ),
          ],
        },
      };
    }
    case "remove_user": {
      return {
        userList: [
          ...state.userList.filter((user) => user.id !== action.payload),
        ],
        postList: {
          ...state.postList,
          [action.payload]: undefined,
        },
      };
    }
    case "edit_post": {
      return {
        userList: [...state.userList],
        postList: {
          ...state.postList,
          [action.payload.userId]: [
            ...state.postList[action.payload.userId].map((post) => {
              return post.id === action.payload.id ? action.payload : post;
            }),
          ],
        },
      };
    }
    default:
      return state;
  }
};

const getUsers = (dispatch) => async () => {
  try {
    const response = await usersApi.get(`/users`);
    dispatch({ type: "get_users", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getPosts = (dispatch) => async (userId) => {
  try {
    const response = await usersApi.get(`/users/${userId}/posts`);
    dispatch({ type: "get_posts", payload: { [userId]: response.data } });
  } catch (err) {
    console.log(err);
  }
};

const removePost = (dispatch) => (userId, postId) => {
  dispatch({ type: "remove_post", payload: { userId, postId } });
};

const removeUser = (dispatch) => (userId) => {
  dispatch({ type: "remove_user", payload: userId });
};

const editPost = (dispatch) => (title, body, userId, postId) => {
  dispatch({ type: "edit_post", payload: { title, body, userId, id: postId } });
};

export const { Context, Provider } = createDateContext(
  userReducer,
  { getUsers, getPosts, removePost, removeUser, editPost },
  { userList: [], postList: {} }
);
