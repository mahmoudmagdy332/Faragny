import { configureStore } from '@reduxjs/toolkit'
import auth_reducer from './slices/AuthSlice'
import pay_reducer from './slices/PaySlice'
export const store = configureStore({
  reducer: {
    AuthReducer:auth_reducer,
    PayReducer:pay_reducer
  },
})