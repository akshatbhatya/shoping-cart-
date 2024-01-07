import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NavBar from './Components/Navbar/NavBar'

function App() {


  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
