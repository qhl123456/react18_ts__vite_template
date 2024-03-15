import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0,
    message: 'Hello World'
  },
  reducers: {
    changeCount: (state, { payload }: { payload: number }) => {
      state.count += payload
    },
    changeMessage: (state, { payload }: { payload: string }) => {
      state.message = payload
    }
  }
})

export const { changeCount, changeMessage } = countSlice.actions

export default countSlice.reducer
