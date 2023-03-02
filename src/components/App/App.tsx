import { useEffect } from "react"
import { ellipseData } from "../../utils/utils"
import Ellipse from "../Ellipse/Ellipse"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

function App() {
  useEffect(() => {
    const { ethereum } = window
    const handleAccountChange = (e: any) => console.log(e)
    const handleChainChange = (e: any) => console.log(e)
    ethereum.on("accountsChanged", handleAccountChange)
    ethereum.on("chainChanged", handleChainChange)
    return () => {
      ethereum.removeListener("accountsChanged", handleAccountChange)
      ethereum.removeListener("chainChanged", handleChainChange)
    }
  }, [])

  return (
    <div className="app">
      {ellipseData.map((data) => {
        return <Ellipse {...data} />
      })}
      <Header />
      <Footer />
    </div>
  )
}

export default App
