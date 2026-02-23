import { useEffect, useState } from "react";
import api from "../../api/gateway";
import "./BuyTicketModal.css";

export default function BuyTicketModal({ eventId, onClose }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    api.get("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Erro ao buscar usuários", err));
  }, []);

  const handleBuy = async () => {
    if (!userId) {
      alert("Selecione um usuário");
      return;
    }

    try {
      await api.post("/sales", {
        eventId: String(eventId),
        userId: String(userId),
        status: "EM_ABERTO"
      });

      alert("Compra realizada com sucesso!");
      onClose();
    } catch (error) {
      console.error("Erro na compra", error);
      alert("Erro ao realizar compra");
    }
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Comprar Ingresso</h2>

        <input
          type="text"
          placeholder="Buscar usuário..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          value={userId}
          onChange={e => setUserId(e.target.value)}
        >
          <option value="">Selecione um usuário</option>
          {filteredUsers.map(u => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>

        <div className="modal-buttons">
          <button onClick={handleBuy}>
            Confirmar Compra
          </button>
          <button className="cancel" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}