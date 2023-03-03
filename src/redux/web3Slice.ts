import { createSlice } from "@reduxjs/toolkit"

export const web3Slice = createSlice({
  name: "web3",
  initialState: {
    account: "",
    chain: "",
  },
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload
    },
    setChain: (state, action) => {
      state.chain = action.payload
    },
    connectWallet: (state) => {},
  },
})

export const { connectWallet, setAccount, setChain } = web3Slice.actions

export default web3Slice.reducer
