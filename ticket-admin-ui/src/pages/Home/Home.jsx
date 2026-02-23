import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/gateway";
import "./Home.css";
import BuyTicketModal from "../../components/BuyTicket/BuyTicketModal";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/events").then(res => setEvents(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Eventos Disponíveis</h2>

      {events.map(event => (
        <div key={event.id} className="card">
          <h3>{event.description}</h3>
          <p>Preço: R$ {event.price}</p>
          <button onClick={() => setSelectedEvent(event.id)}>
            Comprar Ingresso
          </button>
        </div>
      ))}
      {selectedEvent && (
        <BuyTicketModal eventId={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}