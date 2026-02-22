import { useState } from "react";
import api from "../api/gateway";

export default function EventForm() {
  const [event, setEvent] = useState({
    description: "",
    type: 0,
    date: "",
    price: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Evento enviado:", event);
    await api.post("/events", event);
    alert("Evento cadastrado com sucesso!");
  };

  return (
    <div className="card">
      <h2>Cadastro de Evento</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Descrição"
          value={event.description}
          onChange={(e) =>
            setEvent({ ...event, description: e.target.value })
          }
        />

        {/* SELECT DO TIPO DE EVENTO */}
        <select
          value={event.type}
          onChange={(e) =>
            setEvent({ ...event, type: Number(e.target.value) })
          }
        >
          <option value={0}>Teste</option>
          <option value={1}>Show</option>
          <option value={2}>Palestra</option>
          <option value={3}>Teatro</option>
        </select>

        <input
          type="date"
          value={event.date}
          onChange={(e) =>
            setEvent({ ...event, date: e.target.value })
          }
        />

        <input
          placeholder="Preço"
          type="number"
          value={event.price}
          onChange={(e) =>
            setEvent({ ...event, price: Number(e.target.value) })
          }
        />

        <button type="submit">Cadastrar Evento</button>
      </form>
    </div>
  );
}
