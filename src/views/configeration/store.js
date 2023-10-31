import { configureStore } from '@reduxjs/toolkit'
import userSlicer from './slice/userSlicer'

export const store = configureStore({
  reducer: {
    user:userSlicer
  },
})