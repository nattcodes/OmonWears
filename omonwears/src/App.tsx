import CollectionSection from "./components/CollectionSection"
import Home from "./components/Home"
import Navbar from "./components/Navbar"



function App() {

  return (
    <div className="app">
      <Navbar/>
      <Home/> 
      <CollectionSection/>
    </div>
  )
}

export default App
