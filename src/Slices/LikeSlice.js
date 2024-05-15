import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const LikeSlice = createSlice({
  name: 'Likes',
  initialState,
  reducers: {
    like: (state) => {
      state.value+=1
    },
    dislike:(state)=>{
      state.value-=1
    }
  },
})

// Action creators are generated for each case reducer function
export const { like,dislike} = LikeSlice.actions

export default LikeSlice.reducer