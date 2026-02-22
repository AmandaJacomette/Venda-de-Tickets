import { useState } from "react";
import api from "../api/gateway";

export default function SaleForm() {
  const [sale, setSale] = useState({
    userId: "",
    eventId: "",
    saleStatus: "EM_ABERTO"
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/sales", sale);
    alert("Venda registrada!");
  };

  return (
    <div className="card">
      <h2>Cadastro de Venda</h2>

      <form onSubmit={submit}>
        <input
          placeholder="ID do Usuário"
          onChange={e => setSale({ ...sale, userId: e.target.value })}
        />

        <input
          placeholder="ID do Evento"
          onChange={e => setSale({ ...sale, eventId: e.target.value })}
        />

        <select
          onChange={e => setSale({ ...sale, saleStatus: e.target.value })}
        >
          <option>EM_ABERTO</option>
          <option>PAGO</option>
          <option>CANCELADO</option>
          <option>ESTORNADO</option>
        </select>

        <button>Cadastrar Venda</button>
      </form>
    </div>
  );
}
