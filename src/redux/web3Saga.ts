import { put, call, takeEvery } from "redux-saga/effects"
import { setAccount, setChain } from "./web3Slice"

function* getAccount() {
  const { ethereum } = window

  try {
    if (!ethereum) {
      return console.log("error", "Wallet is not installed")
    } else {
      const address: [string] = yield call(() =>
        ethereum.request({
          method: "eth_requestAccounts",
        })
      )

      yield put(setAccount(address[0]))
      yield put(setChain(ethereum.chainId))
    }
  } catch (e) {
    console.log("error", "Error with wallet connecting")
  }
}

function* web3Saga() {
  yield takeEvery("web3/connectWallet", getAccount)
}

export default web3Saga
