import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./Pages/TelaLogin/TelaLogin"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <TelaLogin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
