import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import StaticVariables from '../../Preferences/StaticVariables';
import {getAllComments} from '../../Services/API/CommentsAPIs';

const initialState = {
  comments: StaticVariables.EMPTY_ARRAY,
  loading: false,
  error: null,
};

export const fetchAllComments = createAsyncThunk(
  'comments/fetchAllComments',
  async () => {
    const response = await getAllComments();
    return response;
  },
);

// export const addComment=createAsyncThunk('comments/addComment',
// )

const CommentsSlice = createSlice({
  name: 'Comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllComments.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = [...state.comments, ...action.payload];
      })
      .addCase(fetchAllComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching users';
      });
  },
});

// export const {} = CommentsSlice.actions

export default CommentsSlice.reducer;
