import './App.css'
import Nav from './Components/NavBar/NavBar.jsx' 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from './Components/Cart/Cart.jsx'

import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (

<BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<ItemListContainer />}/>
    <Route path='/category/:categoryName' element={<ItemListContainer greeting='hola' />}/>
    <Route path='/:itemId' element={<ItemDetailContainer />}/>
    <Route path='/cart' element={<Cart />}/>
  </Routes>
</BrowserRouter>
  );
}

export default App;
