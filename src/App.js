import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import './App.css'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  )
}

export default App;
