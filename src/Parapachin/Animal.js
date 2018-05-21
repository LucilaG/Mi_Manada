//componenetes generales
import React from 'react';
import ReactDOM from 'react-dom';
//componentes diseño
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


    handleChange(event) {
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




    //setter y getters


    render() {
        var imagenes = [
            "imag/placeholder1.jpg",
            "imag/placeholder2.jpg",
            "imag/placeholder3.jpg",
            "imag/placeholder4.jpg"
        ]

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className = "carrusel">
                    <PruebaCarrusel imag = {imagenes} />
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder='Nombre'
                        onChange={this.handleChange}
                    />

                </div>
                <div>
                    <Select
                        name="species"
                        value={this.state.species}
                        onChange={this.handleChangeSpecies}
                        placeholder={"Especie"}
                        className="select"
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
                </div>
                <div>
                    <Select
                        name="sex"
                        value={this.state.sex}
                        onChange={this.handleChangeSex}
                        placeholder={"Sexo"}
                        className="select"
                        options={[
                            { value: 'male', label: 'Macho' },
                            { value: 'female', label: 'Hembra' },
                        ]}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="race"
                        placeholder='Raza'
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <Select
                        name="primaryColor"
                        value={this.state.primaryColor}
                        onChange={this.handleChangePrimaryColor}
                        placeholder={"Color primario"}
                        className="select"
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
                </div>
                <div>
                    <Select
                        name="secondaryColor"
                        value={this.state.secondaryColor}
                        onChange={this.handleChangeSecondaryColor}
                        placeholder={"Color secundario"}
                        className="select"
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
                </div>
                <div>
                    <Select
                        name="eyesColor"
                        value={this.state.eyesColor}
                        onChange={this.handleChangeEyesColor}
                        placeholder={"Color de ojos"}
                        className="select"
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
                </div>
                <div>
                    <Select
                        name="size"
                        value={this.state.size}
                        onChange={this.handleChangeSize}
                        placeholder={"Tamaño"}
                        className="select"
                        options={[
                            { value: 'small', label: 'Pequeño' },
                            { value: 'medium', label: 'Mediano' },
                            { value: 'big', label: 'Grande' },
                        ]}
                    />
                </div>
                <div>
                    <label className="date">
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            format="DD-MM-YYYY"
                        />;
                        <br />
                        *Si no conoce la fecha exacta, ingrese una fecha aproximada.
                    </label>
                </div>
                <br />
                <div>
                    <input
                        type="text"
                        name="description"
                        placeholder='Describí a tu animal!'
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
}
ReactDOM.render(<Animal />, document.getElementById('root'))


export default Animal;