import {
  POST_REGISTER_START,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  FETCH_CHEF_START,
  FETCH_CHEF_SUCCESS,
  FETCH_CHEF_FAILURE
} from "../utils/actions";

const initialState = {
  chefInfo: {
    full_name: "",
    location: "",
    phone: "",
    email: "",
    username: "",
    password: ""
  },
  isFetching: false,
  isUpdating: false,
  error: "",
  recipes: [],
  chefs: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER_START:
      return {
        ...state,
        chefInfo: action.payload,
        isFetching: true
      };
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        chefInfo: action.payload,
        isFetching: false,
        error: ""
      };
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case FETCH_CHEF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_CHEF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        chefInfo: action.payload
      };
    case FETCH_CHEF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    //PUT - update a single user by id
    case UPDATE_USER_START:
      return {
        ...state,
        isUpdating: true,
        error: ""
      };
    case UPDATE_USER_SUCCESS:
      console.log("Update Payload", action.payload);
      return {
        ...state,
        isUpdating: false,
        error: "",
        chefInfo: action.payload
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUpdating: false
      };
    case ADD_RECIPE_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      }
    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        recipes: [...state.recipes, action.payload],
      }
    case ADD_RECIPE_FAILURE:
      return {
        ...state,
        idFetching: false,
        error: `Error: Unable to add recipe: ${action.payload}`
      }

    default:
      return state;
  }
};
