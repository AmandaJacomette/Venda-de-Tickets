import EventForm from "../components/EventForm";
import SaleForm from "../components/SalesForm";
import SalesList from "../components/SalesList";

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Sistema Administrativo de Vendas de Ingressos</h1>

      <EventForm />
      <SaleForm />
      <SalesList />
    </div>
  );
}
