import { useEffect, useState } from "react";
import "./App.css";
import Car from "./components/Car.jsx";
import { useNavigate } from "react-router-dom";

function App() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/mock.json")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Erro ao carregar carros:", err));
  }, []);

  return (
    <div>
      <div className="header-pages">
        <button className="button-pages" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="button-pages" onClick={() => navigate("/perguntar")}>
          Pergunte a IA
        </button>
      </div>
      <h1>Os carros que conquistaram o Brasil</h1>
      <p className="sub">Abaixo temos uma lista com os carros populares mais comprados no Brasil</p>
      <div className="vehicle-list">
        {cars.map((car) => (
          <Car key={car.nome} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
