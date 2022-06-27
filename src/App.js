import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCounts/ItemCount";
import WestIpa from './assets/images/westIpa.webp'
import HazyIpa from "./assets/images/hazyIpa.webp"
import GrapeIpa from './assets/images/grapeIpa.webp'
import HempIpa from './assets/images/hempIpa.webp'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenida/os a nuestra tienda online" />
      <div className="contenedorProducto">
        <ItemCount stock={15} name={'West IPA'} imagen={WestIpa} precio={450} />
        <ItemCount stock={2} name={'Hazy IPA'} imagen={HazyIpa} precio={400}/>
        <ItemCount stock={10} name={'Grapel IPA'} imagen={GrapeIpa} precio={500}/>
        <ItemCount stock={8} name={'Hemp IPA'} imagen={HempIpa} precio={550}/>
      </div>

    </>
  )
}

export default App;
