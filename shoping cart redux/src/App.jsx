import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NavBar from './Components/Navbar/NavBar'
import { store } from './Components/Store/Store.js'
import { Provider } from 'react-redux'

function App() {


  return (
    <>
      <Provider store={store}>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
