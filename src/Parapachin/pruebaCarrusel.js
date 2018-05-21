import React from 'react';
import ReactDOM from 'react-dom';
import "./pruebaCarrusel.css"
import Img from 'react-image'

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
      <div>
        <div className="posicionImagen">
          <img src={imag[this.state.i]} alt="Imagen Animal" />
        </div>
        <button onClick={this.handleEventIzquierda} className="Izquierda">Izquierda</button>
        <button onClick={this.handleEventDerecha} className="Derecha">Derecha</button>
      </div>
    )
  }
}
export default PruebaCarrusel;
