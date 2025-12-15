import {Component} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import Unauthorized from './pages/Unauthorized';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

class App extends Component{
  render() {
    return (
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<Unauthorized/>}/>
        </Routes>
      </CartProvider>      
    )
  }
}

export default App;
