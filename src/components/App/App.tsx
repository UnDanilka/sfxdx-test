import Ellipse from "../Ellipse/Ellipse"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const ellipseData = [
  {
    background: "#b2f1de",
    left: "-20px",
    top: "63.36px",
    transform: "rotate(-65.41deg)",
  },
  {
    background: "#72e25e",
    right: "20px",
    top: "63.36px",
    transform: "rotate(-131.25deg)",
  },
  {
    background: "#72e25e",
    left: "-21px",
    top: "725.36px",
    transform: "rotate(-65.41deg)",
  },
  {
    background: "#b2f1de",
    right: "20px",
    top: "725.05px",
    transform: "rotate(-131.25deg)",
  },
]

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
