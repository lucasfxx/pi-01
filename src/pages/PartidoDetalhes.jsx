import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Carousel, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'

import Deputados from './Deputados'

const PartidoDetalhes = () => {

    const params = useParams()
    const [partido, setPartido] = useState({})

    useEffect(() => {
        apiDeputados.get('partidos/' + params.id).then(resultado => {
            setPartido(resultado.data.dados)
        })

    }, [])


    return (

        <div style={{ marginTop: "120px" }}>
            {!partido.id && <Spinner animation="border" variant="primary" />}

            {partido.id &&
                <div>
                    <Row>
                        <Col md={8}>
                            <Card style={{ borderRadius: "20px"}} className="p-3 bg-info">
                            <Card.Title><h1 className='mx-3'>{partido.nome}</h1></Card.Title>
                                <p><strong>Sigla do Partido: </strong>{partido.sigla}</p>
                                <p><strong>Situação: </strong>{partido.status.situacao}</p> 
                                <p><strong>Total de Membros: </strong>{partido.status.totalMembros}</p>
                                <p><strong>Líder Partidário: </strong>{partido.status.lider.nome}</p>
                                <Link className='btn btn-warning' to={-1 }> VOLTAR </Link>
                            </Card>
                        </Col>
                    </Row>
                </div>
            }


        </div>
    )
}

export default PartidoDetalhes