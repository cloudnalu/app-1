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
  },
});

export default slice.reducer;

// Actions for logging in and out
const { loginSuccess, logoutSuccess } = slice.actions;

export const login = ({ phoneNumber, password }) => async (dispatch) => {
  try {
    // TODO: authorize the user with an API
    dispatch(loginSuccess({ phoneNumber }));
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
