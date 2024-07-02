import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Places from './pages/PlaceOrder/Places'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
    <div className='px-2 md:px-10'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}    />
        <Route path='/cart' element={<Cart/>}    />
        <Route path='/plaseorder' element={<Places/>}    />
        
      </Routes>
    
    </div>
    <Footer/>
    </div>
  )
}

export default App
