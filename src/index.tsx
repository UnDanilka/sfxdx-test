import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import App from "./components/App/App"
import { Provider } from "react-redux"
import createSagaMiddleware from "@redux-saga/core"
import { configureStore } from "@reduxjs/toolkit"
import web3Reducer from "./redux/web3Slice"
import web3Saga from "./redux/web3Saga"

const saga = createSagaMiddleware()
const store = configureStore({
  reducer: { web3: web3Reducer },
  middleware: [saga],
})

saga.run(web3Saga)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
