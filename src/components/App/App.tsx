import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAccount, setChain } from "../../redux/web3Slice"
import { ellipseData } from "../../utils/utils"
import Ellipse from "../Ellipse/Ellipse"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Modal from "../Modal/Modal"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const { ethereum } = window
    const handleAccountChange = (accounts: [string]) =>
      dispatch(setAccount(accounts[0]))
    const handleChainChange = (chain: string) => {
      dispatch(setChain(chain))
    }
    ethereum.on("accountsChanged", handleAccountChange)
    ethereum.on("chainChanged", handleChainChange)
    return () => {
      ethereum.removeListener("accountsChanged", handleAccountChange)
      ethereum.removeListener("chainChanged", handleChainChange)
    }
  }, [dispatch])

  return (
    <div className="app">
      <Modal />
      {ellipseData.map((data) => {
        return <Ellipse {...data} />
      })}
      <Header />
      <Footer />
    </div>
  )
}

export default App
