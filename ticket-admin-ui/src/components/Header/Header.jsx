import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">TicketFlow</div>
      <nav className="nav">
        <Link to="/">Eventos</Link>
        <Link to="/novo-evento">Novo Evento</Link>
        <Link to="/vendas">Vendas</Link>
      </nav>
    </header>
  );
}