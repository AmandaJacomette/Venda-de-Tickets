import { useState } from "react";
import api from "../../api/gateway";
import "./EventForm.css";

export default function EventForm() {
  const [event, setEvent] = useState({
    description: "",
    type: 0,
    date: "",
    price: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setEvent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!event.description || !event.date || !event.price) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      await api.post("/events", {
        ...event,
        price: Number(event.price)
      });

      alert("Evento cadastrado com sucesso!");

      setEvent({
        description: "",
        type: 0,
        date: "",
        price: ""
      });

    } catch (error) {
      console.error("Erro ao cadastrar evento:", error);
      alert("Erro ao cadastrar evento");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="event-container">
      <div className="event-card">
        <h2>Novo Evento</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Descrição do evento"
            value={event.description}
            onChange={e => handleChange("description", e.target.value)}
          />

          <select
            value={event.type}
            onChange={e => handleChange("type", Number(e.target.value))}
          >
            <option value={0}>Teste</option>
            <option value={1}>Show</option>
            <option value={2}>Palestra</option>
            <option value={3}>Teatro</option>
          </select>

          <input
            type="date"
            value={event.date}
            onChange={e => handleChange("date", e.target.value)}
          />

          <input
            type="number"
            placeholder="Preço"
            value={event.price}
            onChange={e => handleChange("price", e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar Evento"}
          </button>
        </form>
      </div>
    </div>
  );
}