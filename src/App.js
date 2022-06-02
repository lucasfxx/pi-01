import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Deputados from "./pages/Deputados";
import DeputadosDetalhes from "./pages/DeputadosDetalhes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/deputados" element={<Deputados />} />
            <Route path="/deputadosDetalhes" element={<DeputadosDetalhes />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;