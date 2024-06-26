import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  likedUsers:[]
}

export const LikeSlice = createSlice({
  name: 'Likes',
  initialState,
  reducers: {
    like: (state,action) => {
      state.likedUsers.push(action.payload)
    },
    dislike:(state,action)=>{
      state.likedUsers=state.likedUsers.filter(i=>i.id.value!=action.payload.id.value)
    }
  },
})

// Action creators are generated for each case reducer function
export const { like,dislike} = LikeSlice.actions

export default LikeSlice.reducer