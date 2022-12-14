import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./Pages/TelaLogin/TelaLogin";
import TelaCadastro from "./Pages/TelaCadastro/TelaCadastro"
import Topo from "./Components/Topo";
import Menu from "./Components/Menu";

function App() {
  return (
    <BrowserRouter>
       {/* <Topo />
       <Menu/> */}
      <Routes>     
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
