import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
  status: 'idle',
  error: null,
}

const rsvpSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    submitRequest: (state) => {
      state.status = 'loading'
      state.error = null
    },
    submitSuccess: (state, action) => {
      state.status = 'success'
      state.data = action.payload
      state.error = null
    },

    submitFailure: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    },
    reset: (state) => {
      state.data = null
      state.status = 'idle'
      state.error = null
    },
  },
})

export const { submitRequest, submitSuccess, submitFailure, reset } = rsvpSlice.actions

export default rsvpSlice.reducer
