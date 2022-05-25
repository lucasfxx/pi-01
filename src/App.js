import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Deputados from "./pages/Deputados";


function App() {
  return (
    <div className='App-background'>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/deputados" element={<Deputados />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;