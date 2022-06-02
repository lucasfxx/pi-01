import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'
import {FiSearch} from 'react-icons/fi'
import '../App.css'

const Deputados = () => {

    const [deputados, setDeputados] = useState([])

    useEffect(() => {

        apiDeputados.get('deputados').then(resultado => {
            setDeputados(resultado.data.dados)
        })

    }, [])

    return (

    <div>
        <h1>Deputados</h1>

        <Table striped bordered hover variant="primary">
            <thead>
                <tr>
                    <th>Detalhar</th>
                    <th>Nome</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                {deputados.map(item => (
                    <tr key={item.id}>
                        <td>
                            <Link to={"/deputadosDetalhes/" + item.id}>
                                <FiSearch />
                            </Link>
                        </td>
                        <td>{item.nome}</td>                     
                        <td>
                            <img height={100} src={item.urlFoto} />    
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>

    )
}

export default Deputados