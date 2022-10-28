import { configureStore } from '@reduxjs/toolkit'
import { fontSlice } from './edit/edit'

export const store = configureStore({
  reducer: {
    font: fontSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
