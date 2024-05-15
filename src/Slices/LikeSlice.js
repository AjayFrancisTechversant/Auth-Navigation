import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  likedUsersId:[]
}

export const LikeSlice = createSlice({
  name: 'Likes',
  initialState,
  reducers: {
    like: (state,action) => {
      state.likedUsersId.push(action.payload)
    },
    dislike:(state,action)=>{
      state.likedUsersId=state.likedUsersId.filter(item=>item!=action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { like,dislike} = LikeSlice.actions

export default LikeSlice.reducer