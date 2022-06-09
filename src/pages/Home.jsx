
import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
            <Card className="text-center" bg="info">
                 <Card.Header>Bem vindos ao Corruptoflix </Card.Header>
                <Card.Body>
                <Card.Text>
                   Intro...
                </Card.Text>

                <Link className="btn btn-warning " to={"/deputados/"}>
                                    Deputados
                </Link><br/>
             <Link className="btn btn-warning " to={"/partidos/"}>
                                    Partidos
             </Link>

                </Card.Body>
                <Card.Footer className="text-muted">
                <Link className="btn btn-warning " to={""}>
                                    Novo deputado
             </Link>
                </Card.Footer>
            </Card>
</div>
  )
}

export default Home