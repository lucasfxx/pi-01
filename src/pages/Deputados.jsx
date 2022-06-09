import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import {FaSearchDollar} from 'react-icons/fa'
import '../App.css'
import apiDeputados from '../services/apiDeputados'
import { getDeputado } from '../services/apiPesquisar'
import Cartao from '../components/cartao'


const Deputados = () => {

    const [deputados, setDeputados] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [perPagina] = useState(12);

  const index = pagina * perPagina;
  const FIndex = index - perPagina;
  const totalPaginas = Math.ceil(deputados.length / perPagina);

  const paginacao =
    deputados < perPagina ? deputados : deputados.slice(FIndex, index);


    useEffect(() => {

        apiDeputados.get('deputados').then(resultado => {
            setDeputados(resultado.data.dados)
        })

    }, [])

    const deputado = async (event) => {
        getDeputado(event.target.value).then(response => setDeputados(response));
        setPagina(1);
    };
    const nextPagina = () => {
        if (pagina >= totalPaginas) {
          return null;
        }
    
        setPagina(pagina + 1);
      };
    
      const prevPagina = () => {
        if (pagina <= 1) {
          return null;
        }
    
        setPagina(pagina - 1);
      };

    return (

    <div>
       

        <h1>Deputados</h1>
        
        <Card  border="Warning" style={{ width: '30rem' }}>
        <input style={{ height: '30px', borderRadius: '14px'}} 
               className='text-info bg-warning '  placeholder= 'Nome do Deputado...' type="Text" onChange={deputado}/>
        </Card>
        
        <div>
        <Row xs={1} md={4} xl={3} className="g-3">
        
        {paginacao.map((item) => (
        <Col>
          <Card key={item.id} bg="info"  className='p-2 m-2 bg-info'>
            <Card.Img variant="top" src={item.urlFoto} />
            <Card.Body>
            <Card.Title><strong>{item.nome}</strong></Card.Title>
            <Card.Text><strong>Partido: </strong>{item.siglaPartido}</Card.Text>
            <Card.Text><strong>Estado: </strong>{item.siglaUf}</Card.Text>
            <Link className="btn btn-warning w-100" to={"/deputadosDetalhes/" + item.id}>
                                    Ver Detalhes
            </Link>
            </Card.Body>
        
            </Card>
            </Col>
        ))}
        
        </Row>
      </div>
                   
       
        
        
        <div className="App-centro">
        <Button variant="warning" onClick={prevPagina}>Anterior</Button>
        {pagina} / {totalPaginas}
        <Button variant="warning"  onClick={nextPagina}>Próxima</Button>
        </div>
    </div>
       

   

    )
}

export default Deputados