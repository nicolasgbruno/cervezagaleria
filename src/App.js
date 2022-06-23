import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting="Bienvenida/os a nuestra tienda online"/>
    </div>
  )
}

export default App;
