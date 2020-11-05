import { createSlice } from "@reduxjs/toolkit";

// Slice for user
const slice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
    setUserSuccess: (state, action) => {
      state.user = action.payload
    }
  },
});

export default slice.reducer;

// Actions for logging in and out
const { loginSuccess, logoutSuccess, setUserSuccess } = slice.actions;

export const login = () => async (dispatch) => {
  try {
    // TODO: authorize the user with an API
    return dispatch(loginSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};

export const setUser = (user) => async (dispatch) => {
  try {
    return dispatch(setUserSuccess(user));
  }
  catch (e) {
    return console.error(e.message);
  }
}
