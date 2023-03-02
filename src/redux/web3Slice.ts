import { createSlice } from "@reduxjs/toolkit"

export const web3Slice = createSlice({
  name: "web3",
  initialState: {
    account: "",
  },
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload
    },
    connectWallet: (state) => {},
  },
})

export const { connectWallet, setAccount } = web3Slice.actions

export default web3Slice.reducer
