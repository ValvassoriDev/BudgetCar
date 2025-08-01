const Car = ({ car }) => {
  return (
    <div className="car">
      <img src={car.imagem} alt={car.nome} className="car-image" />
      <h2>{car.nome}</h2>
      <ul>
        {Object.entries(car).map(([key, value]) => {
          if (key === "nome" || key === "imagem") return null;

          if (key === "fipe_min") {
            const valorNumerico = Number(value);
            const valorFormatado = isNaN(valorNumerico)
              ? value
              : valorNumerico.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                });

            return (
              <li key={key}>
                <strong>{formatarChave(key)}:</strong> {valorFormatado}
              </li>
            );
          }

          return (
            <li key={key}>
              <strong>{formatarChave(key)}:</strong> {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function formatarChave(chave) {
  return chave
    .replace(/_/g, " ")
    .replace(/^./, (str) => str.toUpperCase());
}

export default Car;
