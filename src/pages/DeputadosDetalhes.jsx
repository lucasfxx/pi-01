import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Cartao from '../components/cartao'
import apiDeputados from '../services/apiDeputados'



const DeputadosDetalhes = () => {

    const params = useParams()
    const [deputado, setDeputado] = useState({})
   


    useEffect(() => {
        apiDeputados.get('deputados/' + params.id ).then(resultado => {
            setDeputado(resultado.data.dados)
            
        })
     
    }, [])

    return (
        <div>
            {!deputado.id && <Spinner animation="border" variant="primary" />}

            {deputado.id &&
                <div>
                    <h1>{deputado.nome}</h1>
                    <Row>
                        <Col md={4}>
                            <Cartao >
                                <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
                            </Cartao>
                        </Col>
                        <Col md={8}>
                            <p><strong>Nome: </strong>{deputado.ultimoStatus.nome}</p>
                            <p><strong>Partido: </strong>{deputado.ultimoStatus.siglaPartido}</p>
                            <p><strong>Estado: </strong>{deputado.ultimoStatus.siglaUf}</p>
                            <p><strong>Email: </strong>{deputado.ultimoStatus.email}</p>
                            <p><strong>Data de Nascimento: </strong>{deputado.dataNascimento}</p>
                            <p style={{ fontSize: "18pt" }}><strong>CPF: </strong>{deputado.cpf}</p>

                            <Link className='btn btn-warning' to={-1 }> VOLTAR </Link>
                        </Col>


                       
                    </Row>
                    
                </div>
            }
        </div>
    )
}

export default DeputadosDetalhes