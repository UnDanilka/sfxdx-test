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
    if (ethereum) {
      const handleAccountChange = (accounts: [string]) =>
        dispatch(setAccount(accounts[0]))
      const handleChainChange = (chain: string) => {
        dispatch(setChain(chain))
      }

      const getActiveData = async () => {
        const address = await ethereum.request({
          method: "eth_accounts",
        })

        if (address) dispatch(setAccount(address[0]))
        const chain = await ethereum.request({
          method: "eth_chainId",
        })
        if (chain) dispatch(setChain(chain))
      }

      getActiveData()

      ethereum.on("accountsChanged", handleAccountChange)
      ethereum.on("chainChanged", handleChainChange)

      return () => {
        ethereum.removeListener("accountsChanged", handleAccountChange)
        ethereum.removeListener("chainChanged", handleChainChange)
      }
    }
  }, [dispatch])

  return (
    <div className="app">
      <Modal />
      {ellipseData.map((data, i) => {
        return <Ellipse {...data} key={i} />
      })}
      <Header />
      <Footer />
    </div>
  )
}

export default App
