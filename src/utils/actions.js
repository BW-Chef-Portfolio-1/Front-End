import { axiosWithAuth } from "../utils/axiosWithAuth";

//(post) Registration
export const POST_REGISTER_START = "POST_REGISTER_START";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAILURE = "POST_REGISTER_FAILURE";

export const postChefInfo = info => dispatch => {
  dispatch({ type: POST_REGISTER_START, payload: info });
  console.log(info);
  axiosWithAuth()
    .post("/login/register", info)
    .then(res => {
      dispatch({ type: POST_REGISTER_SUCCESS, payload: info });

      console.log(`this is the response ${res.data.token}`);
    })
    .catch(err => {
      dispatch({ type: POST_REGISTER_FAILURE, payload: err.response });
    });
};

//(get) Fetch Chef
export const FETCH_CHEF_START = "FETCH_CHEF_START";
export const FETCH_CHEF_SUCCESS = "FETCH_CHEF_SUCCESS";
export const FETCH_CHEF_FAILURE = "FETCH_CHEF_FAILURE";

export const getChef = id => dispatch => {
  dispatch({ type: FETCH_CHEF_START });
  // console.log(newRecipe );
  axiosWithAuth()
    .get(`/user/user/${id}`)
    .then(res => {
      dispatch({ type: FETCH_CHEF_SUCCESS, payload: res.data[0] });

      console.log(`this is the response ${res}`);
    })
    .catch(err => {
      dispatch({ type: FETCH_CHEF_FAILURE, payload: err.response });
    });
};

// (put) Update User
export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const updateUser = (updatedInfo, id) => dispatch => {
  dispatch({ type: UPDATE_USER_START });

  axiosWithAuth()
    .put(`/user/update/${id}`, updatedInfo)
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });

      console.log(`this is the response ${res.data}`);
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAILURE, payload: err.response });
    });
};

//(post) Add Recipe
export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

// export const addRecipe = newRecipe => dispatch => {
//   dispatch({ type: ADD_RECIPE_START });
//   // console.log(newRecipe );
//   axiosWithAuth()
//     .post("/login/register", newRecipe)
//     .then(res => {
//       dispatch({ type: ADD_RECIPE_SUCCESS, payload: res });

//       console.log(`this is the response ${res.data}`);
//     })
//     .catch(err => {
//       dispatch({ type: ADD_RECIPE_FAILURE, payload: err.response });
//     });
// };

export const addRecipe = (addRecipe) => dispatch => {
  console.log('add recipe', addRecipe);
  dispatch({ type: ADD_RECIPE_START });
  axiosWithAuth()
    .post("/login/register", addRecipe)
    .then(res => {
      console.log('res', res)
      dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_RECIPE_FAILURE, payload: err.response });
    });
};
