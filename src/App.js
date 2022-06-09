import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Deputados from "./pages/Deputados";
import DeputadosDetalhes from "./pages/DeputadosDetalhes";
import Home from "./pages/Home";
import PartidoDetalhes from "./pages/PartidoDetalhes";
import Partidos from "./pages/Partidos";



function App() {
  return (
    <div className='App-header'>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deputados" element={<Deputados />} />
            <Route path="/deputadosDetalhes/:id" element={<DeputadosDetalhes />} />
            <Route path="/partidos" element={<Partidos />} />
            <Route path="/partidosDetalhes/:id" element={<PartidoDetalhes />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;