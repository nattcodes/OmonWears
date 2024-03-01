import CollectionSection from "./components/CollectionSection"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import TopProduct from "./components/TopProduct"



function App() {

  return (
    <div className="app">
      <Navbar/>
      <Home/> 
      <CollectionSection/>
      <TopProduct/>
    </div>
  )
}

export default App
