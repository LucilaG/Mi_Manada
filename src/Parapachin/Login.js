import React from 'react'
import './forms.css'


export class Login extends React.Component {
constructor(props){
    super(props);
    this.state ={
        email: '',
        password: '',
    }
}
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        this.setState({
            email: "",
            password: "",
        });

    };
    
    render() {
        return (
            <form>
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
                <button onClick={this.onSubmit}>Enviar</button>
            </form>
        );
    }
}
export default Login;