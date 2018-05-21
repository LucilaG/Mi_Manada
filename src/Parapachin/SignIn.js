import React from 'react'
import './forms.css'


export class SignIn extends React.Component {
    
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);    
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
    };

    render() {
        return (
            <form>
                <input
                    name="firstName"
                    placeholder='Nombre'
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="lastName"
                    placeholder='Apellido'
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="email"
                    type="email"
                    placeholder='Email'
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder='Contraseña'
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Enviar</button>
            </form>
        );
    }
}
export default SignIn;