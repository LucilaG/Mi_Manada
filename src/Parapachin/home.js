import React from 'react'

import { Link } from 'react-router-dom'

//componentes diseño
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';



export class Home extends React.Component {

    render() {
        return (
            <Grid>
            <Row>
            <Col xs={12} md={12}>
            <h1>Mi Manada</h1>
            </Col>
            </Row>
            <Row>
            <Col xs={12} md={4}>
            <Link to='/Login'>
                <button className="buttonApp">
                    <p>Ingresar</p>
                </button>
            </Link>
            </Col>
            <Col xs={12} md={4}>
            <Link to='/Signin'>
                <button className="buttonApp">
                    <p>Registrarse</p>
                </button>
            </Link> 
            </Col>
            <Col xs={12} md={4}>
            <Link to='/Animal'>
                <button className="buttonApp">
                    <p>Agregar Mascota</p>
                </button>
            </Link>
            </Col>
            </Row>
            </Grid>
            )
    }
}
export default Home;