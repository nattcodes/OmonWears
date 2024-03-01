import CollectionSection from "./components/CollectionSection"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import TopProduct from "./components/TopProduct"
import WhatP from "./components/WhatP"



function App() {

  return (
    <div className="app">
      <Navbar/>
      <Home/> 
      <CollectionSection/>
      <WhatP/>
      <TopProduct/>
    </div>
  )
}

export default App
