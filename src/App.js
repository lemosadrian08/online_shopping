import './App.css'
import Nav from './Components/NavBar/NavBar.jsx' 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from './Components/Cart/Cart.jsx'
import CustomProvider from './Components/CartContext/CartContext.jsx'

import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (

<BrowserRouter>
  <CustomProvider>
    <Nav/>
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/category/:categoryName' element={<ItemListContainer greeting='hola' />}/>
      <Route path='/:itemId' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart />}/>
    </Routes>
  </CustomProvider>
</BrowserRouter>
  );
}

export default App;
