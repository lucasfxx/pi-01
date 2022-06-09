import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="warning" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="/"> <img
                            src="data:image/png;base64,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 
                            "width=""
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />Corruptoflix</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/deputados">Deputados</Link>
            <Link className="nav-link" to="/partidos">Partidos</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu