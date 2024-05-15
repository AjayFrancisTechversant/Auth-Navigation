import { configureStore } from '@reduxjs/toolkit'
import LikeSlice from '../Slices/LikeSlice'

export const Store = configureStore({
  reducer: {Likes:LikeSlice},
})