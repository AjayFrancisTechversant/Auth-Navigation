import { configureStore } from '@reduxjs/toolkit'
import LikesReducer from '../Slices/LikeSlice'

export const Store = configureStore({
  reducer: {Likes:LikesReducer},
})