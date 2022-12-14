import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./Pages/TelaLogin/TelaLogin";
import TelaCadastro from "./Pages/TelaCadastro/TelaCadastro"
import Habitos from "./Pages/Habitos/Habitos";
import Topo from "./Components/Topo";
import Menu from "./Components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>     
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/habitos" element={
          <>
        <Topo/>
        <Habitos />
        <Menu/>
        </>
      } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
