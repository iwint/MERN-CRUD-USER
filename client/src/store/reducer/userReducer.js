import { createSlice } from '@reduxjs/toolkit';
import { AddUser, GetUsers } from '../action/userActions';

const initialState = {
  users: [],
};

const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [GetUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
      console.log('GOT PAYLOAD USERS', state.users);
    },
    [AddUser.fulfilled]: (state, { payload }) => {
      let temp = [...state.users];
      temp.push(payload);
      state.users = temp;
    },
  },
});

export const {} = userReducer.actions;

export default userReducer.reducer;
