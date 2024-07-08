import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../Services/API/getUsers';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page) => {
  const response = await getUsers(page);
  return response;
});

const UsersSlice = createSlice({
  name: 'Users',
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = [...state.users, ...action.payload];
      });
  },
});

export default UsersSlice.reducer;
