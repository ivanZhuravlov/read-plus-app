import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {},
  error: "",
};

const { reducer, actions } = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    onUserExist: (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = {
        ...payload,
        fullName: `${payload.name} ${payload.surname}`,
      };
    },
    onLogout: () => {
      return initialState;
    },
  },
});

export const { onLoginSuccess, onUserExist, onLogoutSuccess, onLogout } =
  actions;
export default reducer;
