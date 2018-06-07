import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
//componentes diseño
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Footer from '/home/lucila/Project/animaladas/src/Parapachin/footer.js'

console.log("app.js")

class App extends Component {
  render() {
    return (
      <Grid>
      <Grid>
        <Row>
        <Col xs={12} md={12}>
          <h1>Mi Manada</h1>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={6}>
          <Link to='/Animal'>
          <button className="buttonApp">
              <p>Agregar Mascota</p>
            </button>
          </Link>
          </Col>
          <Col xs={12} md={6}>
          <Link to='/Vaccines'>
            <button className="buttonApp">
              <p>Calendario Vacunación</p>
            </button>
          </Link>
          </Col>
        </Row>
        </Grid>
        <Row>
          <Col xs={12} md={12} className="footerFixed">
              <Footer />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;