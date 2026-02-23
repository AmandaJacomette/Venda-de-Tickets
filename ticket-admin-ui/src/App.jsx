import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import EventForm from "./pages/EventForm/EventForm";
import SalesList from "./pages/SalesList/SalesList";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-evento" element={<EventForm />} />
        <Route path="/vendas" element={<SalesList />} />
      </Routes>
    </BrowserRouter>
  );
}