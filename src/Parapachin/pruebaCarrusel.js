import React from 'react';
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
 handleEventFour = (i) => {
  this.setState(prevState => ({
    i: 0
  }));
 }
 handleEventCero= (i) => {
  this.setState(prevState => ({
    i: 3
  }));
}
  render() {
    console.log(this.i);
    let imag = this.props.imag;
    return (
      <Grid className="heigthPruebaCarrusel">
        <Row>
         <Col sm={12} md= {12} className="posicionImagen">
          <img src={imag[this.state.i]} alt="Imagen Animal" />
          </Col>
        </Row>
        <Row>
          <Col sm={6} md= {6} className="botones left">
             <button onClick={this.state.i<=0 ?  this.handleEventCero : this.handleEventIzquierda}>Izquierda</button>
          </Col>
          <Col sm={6} md= {6} className="botones rigth">
              <button onClick={this.state.i>=3 ?  this.handleEventFour : this.handleEventDerecha}>Derecha</button>
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default PruebaCarrusel;
