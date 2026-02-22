import { useEffect, useState } from "react";
import api from "../api/gateway";

export default function SalesList() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    api.get("/sales").then(res => setSales(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/sales/${id}/status?status=${status}`);
    window.location.reload();
  };

  return (
    <div className="card">
      <h2>Lista de Vendas</h2>

      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Evento</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {sales.map(s => (
            <tr key={s.id}>
              <td>{s.userId}</td>
              <td>{s.eventId}</td>
              <td>
                <select
                  className="status"
                  value={s.saleStatus}
                  onChange={e => updateStatus(s.id, e.target.value)}
                >
                  <option>EM_ABERTO</option>
                  <option>PAGO</option>
                  <option>CANCELADO</option>
                  <option>ESTORNADO</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
