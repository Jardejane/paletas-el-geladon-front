import "./paleta.lista.item.css";

export function PaletaListaItem({paleta, quantidadeSelecionada, index, onRemove, onAdd}) {

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge">
        {quantidadeSelecionada[index]}{" "}
      </span>
    );

  const removerButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );

  return (
    <div className="PaletaListaItem">
      {badgeCounter(quantidadeSelecionada[index], index)}
      <div>
        <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
        <div className="PaletaListaItem__preco"> R$ {paleta.preco}</div>
        <div className="PaletaListaItem__descricao"> {paleta.descricao} </div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada[index] && `Acoes__adicionar--preencher`
            }`}
            onClick={() => onAdd(index)}
          >
            adicionar
          </button>
          {removerButton(quantidadeSelecionada[index], index)}
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={`paleta de ${paleta.sabor}`}
      />
    </div>
  );
}
