import React from 'react'

import { Link } from 'react-router-dom'





export class Home extends React.Component {

    render() {
        return (
            <div>
            <h1>Mi Manada</h1>
            <Link to='/Login'>
                <button className="buttonApp">
                    <p>Ingresar</p>
                </button>
            </Link>
            <Link to='/Signin'>
                <button className="buttonApp">
                    <p>Registrarse</p>
                </button>
            </Link>
            <Link to='/Animal'>
                <button className="buttonApp">
                    <p>Agregar Mascota</p>
                </button>
            </Link>
            </div>
            )
    }
}
export default Home;