import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import { getPartidoid } from '../services/apiPesquisar'
import apiDeputados from './../services/apiDeputados'


const Partidos = () => {
    const [partidos, setPartidos] = useState([])


    useEffect(() => {
        apiDeputados.get('partidos?itens=61').then(resultado => {
            setPartidos(resultado.data.dados)
        })
    }, [])



    return (
        <div>

         <Table striped bordered hover variant="primary">
            <thead>
                <tr>
                    <th>Detalhar</th>
                    <th>Nome</th>
                    <th>Sigla</th>
 
                </tr>
            </thead>
            <tbody>
                {partidos.map(item => (
                    <tr key={item.id}>
                        <td>
                            <Link to={"/partidosDetalhes/" + item.id}>
                                <FiSearch />
                            </Link>
                        </td>
                        <td>{item.nome}</td>                     
                        <td>{item.sigla}</td>                     
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    )
}

export default Partidos