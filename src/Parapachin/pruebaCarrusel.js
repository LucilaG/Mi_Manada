import React from 'react';
import ReactDOM from 'react-dom';
import "./pruebaCarrusel.css"
import Img from 'react-image'
//componentes diseño
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class PruebaCarrusel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0
    }
  }

 handleEventDerecha = (i) => {
  this.setState(prevState => ({
      i: prevState.i + 1
    }));  
  };
  handleEventIzquierda = (i)  => {
    this.setState(prevState => ({
      i: prevState.i - 1
    }));
  };

  render() {
    console.log(this.i);
    let imag = this.props.imag;
    return (
      <Grid>
        <Row>
         <Col sm={12} md= {12} className="posicionImagen">
          <img src={imag[this.state.i]} alt="Imagen Animal" />
          </Col>
        </Row>
        <Row>
          <Col sm={6} md= {6}>
             <button onClick={this.handleEventIzquierda} className="Izquierda">Izquierda</button>
          </Col>
          <Col sm={6} md= {6}>
              <button onClick={this.handleEventDerecha} className="Derecha">Derecha</button>
          </Col>
        </Row> 
      </Grid>
    )
  }
}
export default PruebaCarrusel;
