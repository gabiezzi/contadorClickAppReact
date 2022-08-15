import "./App.css";
import freecodecampLogo from "./imagenes/logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from 'react';


function App() {

  const [numClicks,setNumClicks]= useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks+1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador
        numClicks={numClicks}
        />
        <Boton 
        texto="Clic" 
        esBotonClick={true} 
        manejarClick={manejarClick} 
        />
        <Boton
          texto="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
  
  };

export default App;
