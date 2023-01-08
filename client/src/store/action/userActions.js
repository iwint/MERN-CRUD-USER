import { createAsyncThunk } from '@reduxjs/toolkit';
const GET_USERS_ENDPOINT = 'http://localhost:3000/users';
const ADD_USER_ENDPOINT = 'http://localhost:3000/add-user';

export const GetUsers = createAsyncThunk(`GetUsers`, async (data, { rejectWithValue }) => {
  try {
    const response = await fetch(GET_USERS_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (response.status === 200 || response.status === 201) {
      const resData = await response.json();
      console.log('USERS =>', resData);
      return resData;
    } else {
      rejectWithValue("Can't Get Users");
    }
  } catch (error) {
    console.log('Error in Getting Users Info', error);
    throw error;
  }
});

export const AddUser = createAsyncThunk(`AddUser`, async (data, { rejectWithValue }) => {
  try {
    const response = await fetch(ADD_USER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200 || response.status === 201) {
      const resData = await response.json();
      console.log('USERS =>', resData);
      return resData;
    } else {
      rejectWithValue("Can't Add Users");
    }
  } catch (error) {
    console.log('Error in Add User', error);
    throw error;
  }
});
