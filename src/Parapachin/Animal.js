//componenetes generales
import React from 'react';
import ReactDOM from 'react-dom';
//componentes diseño
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//import 'react-datepicker/dist/react-datepicker.css';
import './forms.css';
//componenetes del calendario
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
//componentes del select
import 'react-select/dist/react-select.css';
import Select from 'react-select';

import PruebaCarrusel from '/home/lucila/Project/animaladas/src/Parapachin/pruebaCarrusel'
import Footer from '/home/lucila/Project/animaladas/src/Parapachin/footer.js'


export class Animal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            race: '',
            color: '',
            selectedOption: '',
            type: '',
            description: '',
            isOpen: '',
            name: '',
            species: '',
            sex: '',
            primaryColor: '',
            secondaryColor: '',
            eyesColor: '',
            size: '',
            birthday: '',
            startDate: moment(),
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChangeDate = date => {
        this.setState({
          startDate: date
        });
      }

    handleChange = event => {
        this.setState({ value: event.target.value });
    }
    //metodos de los select
    handleChangeSpecies = (selectedOption) => {
        this.setState({ species: selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }

    handleChangeSex = (selectedOption) => {
        this.setState({ sex: selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }

    handleChangePrimaryColor = (selectedOption) => {
        this.setState({ primaryColor: selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    handleChangeSecondaryColor = (selectedOption) => {
        this.setState({ secondaryColor: selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    handleChangeEyesColor = (selectedOption) => {
        this.setState({ eyesColor: selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    handleChangeSize = (selectedOption) => {
        this.setState({ size: selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }


    handleSubmit(event) {
        event.preventDefault();
    }

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();
    }

    //metodos del calendario
    renderDay(props, currentDate, selectedDate) {
        return <td {...props}>{'0' + currentDate.date()}</td>;
    }
    renderMonth(props, month, year, selectedDate) {
        return <td {...props}>{month}</td>;
    }
    renderYear(props, year, selectedDate) {
        return <td {...props}>{year % 100}</td>;
    }



    render() {
        var imagenes = [
            "imag/placeholder1.jpg",
            "imag/placeholder2.jpg",
            "imag/placeholder3.jpg",
            "imag/placeholder4.jpg"
        ]

        return (
            <Grid>
            <Grid>
            <form onSubmit={this.handleFormSubmit}>
            <Row>
            <Col xs={12} md={12}>
                    <PruebaCarrusel imag = {imagenes} />
            </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <input
                        type="text"
                        name="name"
                        placeholder='   Nombre'
                        onChange={this.handleChange}
                        className="inputAnimal"
                    />

                </Col>
                <Col xs={12} md={8}>
                    <Select
                        name="species"
                        value={this.state.species}
                        onChange={this.handleChangeSpecies}
                        placeholder={"   Especie"}
                        options={[
                            { value: 'cat', label: 'Gato' },
                            { value: 'dog', label: 'Perro' },
                            { value: 'turtle', label: 'Tortuga' },
                            { value: 'rabbit', label: 'Conejo' },
                            { value: 'huron', label: 'Hurón' },
                            { value: 'hedgehog', label: 'Erizo' },
                            { value: 'hamster', label: 'Hámster' },
                            { value: 'bird', label: 'Ave' },
                            { value: 'other', label: 'Otro' },
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md= {6}>
                    <input
                        type="text"
                        name="race"
                        placeholder='   Raza'
                        onChange={this.handleChange}
                        className="inputAnimal"
                    />
                </Col>
                <Col sm={12} md= {3}>
                    <Select
                        name="size"
                        value={this.state.size}
                        onChange={this.handleChangeSize}
                        placeholder={"Tamaño"}
                        options={[
                            { value: 'small', label: 'Pequeño' },
                            { value: 'medium', label: 'Mediano' },
                            { value: 'big', label: 'Grande' },
                        ]}
                    />
                </Col>
                <Col sm={12} md= {3}>
                    <Select
                        name="sex"
                        value={this.state.sex}
                        onChange={this.handleChangeSex}
                        placeholder={"Sexo"}
                        options={[
                            { value: 'male', label: 'Macho' },
                            { value: 'female', label: 'Hembra' },
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md= {4}>
                    <Select
                        name="primaryColor"
                        value={this.state.primaryColor}
                        onChange={this.handleChangePrimaryColor}
                        placeholder={"Color primario"}
                        options={[
                            { value: 'yellow', label: 'Amarillo' },
                            { value: 'white', label: 'Blanco' },
                            { value: 'cammel', label: 'Cammel' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'grey', label: 'Gris' },
                            { value: 'orange', label: 'Naranja' },
                            { value: 'black', label: 'Negro' },
                        ]}
                    />
                </Col>
                <Col sm={12} md= {4}>
                    <Select
                        name="secondaryColor"
                        value={this.state.secondaryColor}
                        onChange={this.handleChangeSecondaryColor}
                        placeholder={"Color secundario"}
                        options={[
                            { value: 'yellow', label: 'Amarillo' },
                            { value: 'white', label: 'Blanco' },
                            { value: 'cammel', label: 'Cammel' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'grey', label: 'Gris' },
                            { value: 'orange', label: 'Naranja' },
                            { value: 'black', label: 'Negro' },
                        ]}
                    />
                </Col>
                <Col sm={12} md= {4}>
                    <Select
                        name="eyesColor"
                        value={this.state.eyesColor}
                        onChange={this.handleChangeEyesColor}
                        placeholder={"Color de ojos"}
                        options={[
                            { value: 'yellow', label: 'Amarillo' },
                            { value: 'blue', label: 'Azul' },
                            { value: 'white', label: 'Blanco' },
                            { value: 'cammel', label: 'Cammel' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'grey', label: 'Gris' },
                            { value: 'orange', label: 'Naranja' },
                            { value: 'black', label: 'Negro' },
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md= {3}>
               <p className="pDate">Fecha de Nacimiento:</p>
                </Col>
                <Col sm={12} md= {4}>
                    <label className="calendar">
                        <DatePicker
                            dateFormat="DD/MM/YYYY"
                            selected={this.state.startDate}
                            onChange={this.handleChangeDate}
                            className="inputAnimal"
                        />
                    </label>
                </Col>
                <Col sm={12} md= {5}>
                <p className="pDate">*Si no conoce la fecha exacta, ingrese una fecha aproximada.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md= {12}>
                    <textarea
                        type="text"
                        name="description"
                        placeholder='   Describí a tu animal!'
                        onChange={this.handleChange}
                    />
                </Col>
            </Row>
            </form>
            </Grid>
            <Row> 
           <Col xs={12} md={12} className="footerFixed">
                    <Footer />
            </Col>
            </Row>
            </Grid>
        );
    }
}
ReactDOM.render(<Animal />, document.getElementById('root'))


export default Animal;