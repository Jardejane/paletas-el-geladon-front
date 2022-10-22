import { useState } from "react";
import { PaletaListaItem } from "../paleta.lista.item/paleta.lista.item";
import { paletas } from "mocks/paletas";
import "./paletaList.css";

function PaletaLista() {
  const [paletaSelecionada, setpaletaSelecionada] = useState({});

  const adicionarItem = (paletaIndex) =>{
    const paleta = {[paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1 }
    setpaletaSelecionada({...paletaSelecionada, ...paleta})
  }
  const removerItem = (paletaIndex) => {
   const paleta = {[paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) -1}
   setpaletaSelecionada({...paletaSelecionada, ...paleta})
  }

  
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
       <PaletaListaItem key={`PaletaListaItem ${index}`} />
      ))}
    </div>
  );
}

export default PaletaLista;
