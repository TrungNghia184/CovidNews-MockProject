import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  language: 'en',
}

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

// Action creators are generated for each case reducer function

export const { increment, decrement, incrementByAmount, setLanguage } = globalSlice.actions
export default globalSlice.reducer