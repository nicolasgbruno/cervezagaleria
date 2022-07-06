import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App;
