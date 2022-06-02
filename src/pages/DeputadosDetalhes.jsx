import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'

const DeputadosDetalhes = () => {

  const params = useParams()
  const [deputado,  setDeputado] = useState([])


  useEffect(() => {
    apiDeputados.get('/deputados/' + params.id).then(resultado => {
      console.log(resultado.data.dados)
    })
  }, [])
  return (
    <div>
            {!deputado.id && <h1>Carregando... Aguarde!</h1>}

            {deputado.id &&
                <div>
                    <h1>{deputado.nome}</h1>
                    <Row>
                        <Col md={4}>
                            <Card>
                            <Card.Img variant="top" src={deputado.urlFoto} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Data de Nascimento </strong>{deputado.birthday}</p>
                            <p><strong>Local de Nascimento </strong>{deputado.place_of_birth}</p>
                            <p><strong>Biografia </strong>{deputado.biography}</p>
                            <Link className='btn btn-primary' to={-1}>Voltar</Link>
                        </Col>
                                        
                    </Row>
                </div>
            }
        </div>
    )
}
export default DeputadosDetalhes