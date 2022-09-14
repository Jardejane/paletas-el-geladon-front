import { paletas } from "mocks/paletas";
import "./paletaList.css";

function PaletaLista() {
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <div className="PaletaListaItem" key={`PaletalistaItem-${index}`}>

          <div>
            <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
            <div className="PaletaListaItem__preco"> R$ {paleta.preco}</div>
            <div className="PaletaListaItem__descricao">
              {" "}
              {paleta.descricao}{" "}
            </div>
            <div className="PaletaListaItem__acoes Acoes">
              <button className="Acoes__adicionar Acoes__adicionar--preencher">
                adicionar
              </button>
            </div>
          </div>
          <img
            className="PaletaListaItem__foto"
            src={paleta.foto}
            alt={`paleta de ${paleta.sabor}`}
          />
        </div>
      ))}
    </div>
  );
}

export default PaletaLista;
