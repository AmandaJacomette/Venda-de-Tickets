import { useEffect, useState } from "react";
import api from "../../api/gateway";
import "./SalesList.css";

export default function SalesList() {
  const [sales, setSales] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [salesRes, usersRes, eventsRes] = await Promise.all([
        api.get("/sales"),
        api.get("/users"),
        api.get("/events")
      ]);

      console.log("Sales:", salesRes.data);
      console.log("Users:", usersRes.data);
      console.log("Events:", eventsRes.data);

      const enrichedSales = salesRes.data.map(sale => {
        const user = usersRes.data.find(
          u => String(u.id) === String(sale.userId)
        );

        const event = eventsRes.data.find(
          e => String(e.id) === String(sale.eventId)
        );

        return {
          ...sale,
          userName: user ? user.name : "Usuário não encontrado",
          eventName: event ? event.description : "Evento não encontrado"
        };
      });

      setSales(enrichedSales);

    } catch (error) {
      console.error("Erro ao buscar dados", error);
    }
  };

  const updateStatus = async (id, status) => {
    if (!status) return;

    try {
      setLoadingId(id);

      await api.patch(`/sales/${id}/status?status=${status}`);

      setSales(prev =>
        prev.map(sale =>
          sale.id === id ? { ...sale, saleStatus: status } : sale
        )
      );

    } catch (error) {
      console.error("Erro ao atualizar status", error);
      alert("Erro ao atualizar status");
    } finally {
      setLoadingId(null);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "PAGO":
        return "status paid";
      case "CANCELADO":
        return "status canceled";
      case "ESTORNADO":
        return "status refunded";
      default:
        return "status open";
    }
  };

  return (
    <div className="sales-container">
      <h2>Vendas</h2>

      {sales.map(sale => (
        <div key={sale.id} className="sale-card">

          <div className="sale-left">
            <p className="sale-id">Venda #{sale.id}</p>

            <p className="sale-event">
              🎵 Evento: {sale.eventName}
            </p>

            <p className="sale-user">
              👤 Usuário: {sale.userName}
            </p>

            <p className="sale-date">
              📅 {new Date(sale.saleDate).toLocaleString()}
            </p>
          </div>

          <div className="sale-right">
            <span className={getStatusClass(sale.saleStatus)}>
              {sale.saleStatus}
            </span>

            <select
              disabled={loadingId === sale.id}
              onChange={e => updateStatus(sale.id, e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>Alterar Status</option>
              <option value="EM_ABERTO">EM_ABERTO</option>
              <option value="PAGO">PAGO</option>
              <option value="CANCELADO">CANCELADO</option>
              <option value="ESTORNADO">ESTORNADO</option>
            </select>
          </div>

        </div>
      ))}
    </div>
  );
}