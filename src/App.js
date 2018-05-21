import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'



console.log("app.js")

class App extends Component {
  render() {
    return (
      <div>
          <h1>Mi Manada</h1>
          <Link to='/Animal'>
            <button className="buttonApp">
              <p>Agregar Mascota</p>
            </button>
          </Link>
          <Link to='/Vaccines'>
            <button className="buttonApp">
              <p>Calendario Vacunación</p>
            </button>
          </Link>
      </div>
    );
  }
}

export default App;