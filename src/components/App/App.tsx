import { ellipseData } from "../../utils"
import Ellipse from "../Ellipse/Ellipse"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

function App() {
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
