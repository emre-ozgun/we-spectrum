import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adminCredentials: {
    email: "admin@admin.com",
    password: "admin123"
  },
  formCredentials: {
    email: '',
    password: ''
  },
  grantAccess: localStorage.getItem('user') || false,
  error: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    submitCredentials: (state, action) => {

      console.log('AUTH PAYLOAD ----', action.payload);


      const adminEmail = state.adminCredentials.email;
      const adminPassword = state.adminCredentials.password;

      if (action.payload.email === adminEmail && action.payload.password === adminPassword) {
        state.grantAccess = true;
        localStorage.setItem('user', true);
      } else {
        state.error = true;
      }
    },
    resetCredentials: (state, action) => {
      state.grantAccess = false;
      state.error = false;
      state.formCredentials = {
        email: '',
        password: ''
      };
    },

    logout: (state, action) => {
      state.grantAccess = false;
      state.error = false;
      state.formCredentials = {
        email: '',
        password: '',
      }
      localStorage.clear();
    }

  },
});

export const { submitCredentials, resetCredentials, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
