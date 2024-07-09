import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import StaticVariables from '../../Preferences/StaticVariables';
import {addNewComment, getAllComments} from '../../Services/API/CommentsAPIs';

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

export const addComment = createAsyncThunk(
  'comments/addComment',
  async (newCommentDetails) => {
    const response = await addNewComment(newCommentDetails);
    console.log(response);
    return response;
  },
);

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
      })
      .addCase(addComment.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload);
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error adding comment';
      });
  },
});

// export const {} = CommentsSlice.actions

export default CommentsSlice.reducer;
