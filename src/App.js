import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./Pages/TelaLogin/TelaLogin";
import TelaCadastro from "./Pages/TelaCadastro/TelaCadastro";
import TelaHabitos from "./Pages/TelaHabitos/TelaHabitos";
import TelaHoje from "./Pages/TelaHoje/TelaHoje";
import TelaHistorico from "./Pages/TelaHistorico/TelaHistorico";
import Topo from "./Components/Topo";
import Menu from "./Components/Menu";

import UsuarioContext from "./Context/UsuarioContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/habitos" element={
          <>
            <Topo />
            <TelaHabitos />
            <Menu />
          </>
        } />
        <Route path="/hoje" element={
          <>
            <Topo />
            <TelaHoje />
            <Menu />
          </>
        } />
        <Route path="/historico" element={
          <>
            <Topo />
            <TelaHistorico />
            <Menu />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
