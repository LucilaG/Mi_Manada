//componenetes generales
import React from 'react'
//componentes diseño
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//import 'react-datepicker/dist/react-datepicker.css';
import './forms.css';

//otras clases
import './Animal.js'

export class Vaccine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            parvovirus: false,
            adenovirus: false,
            coronanavirus: false,
            moquillo: false,
            hepatitis: false,
            parainfluenza: false,
            leptospirosis: false,
            rinotraqueitis: false,
            calicivoris: false,
            clamidosis: false,
            rabia: false
        };

    };
    handleChangeVaccine = (selectedOption) => {
        this.setState({ vaccine: selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }


    render() {
        var weeks;
        var days = 57;
        if (days >= 42 && days <= 49) {
            weeks = 6;
        } else if (days >= 56 && days <= 63) {
            weeks = 8;
        } else if (days >= 84 && days <= 91) {
            weeks = 12;
        } else if (days >= 112 && days <= 119) {
            weeks = 16;
        } else if (days >= 126 && days <= 133) {
            weeks = 18;
        }

        if (weeks === 8 || weeks === 12) {
            this.state.leptospirosis = true;
            this.state.rinotraqueitis = true;
            this.state.calicivoris = true;
            this.state.clamidosis = true;
        }
        if (weeks === 8 || weeks === 12 || weeks === 6 || weeks === 18) {
            this.state.parvovirus = true;
            this.state.adenovirus = true;
            this.state.coronanavirus = true;
            this.state.moquillo = true;
            this.state.hepatitis = true;
            this.state.parainfluenza = true;
        } else if (weeks === 16) {
            this.state.rabia = true;
        }

        console.log(weeks);
        console.log(this.state.rabia);
        console.log(this.state.parvovirus);
        console.log(this.state.adenovirus);
        console.log(this.state.coronanavirus);
        console.log(this.state.moquillo);
        console.log(this.state.hepatitis);

        return (
            <Grid>
                <Row>
                <h3>Vacunas recomendadas para las semanas que posee tu animal:</h3>
                </Row>
                <Row>
                <label>

                    <div className={this.state.parvovirus ? '' : 'hidden'}>
                        <label>
                            Parvovirus:
                        <input type="checkbox" name="parvovirus" />
                        </label>
                    </div>

                    <div className={this.state.adenovirus ? '' : 'hidden'}>
                        <label>
                            Adenovirus:
                        <input type="checkbox" name="adenovirus" />
                        </label>
                    </div>

                    <div className={this.state.coronanavirus ? '' : 'hidden'}>
                        <label>
                            Coronanavirus:
                        <input type="checkbox" name=" coronanavirus" />
                        </label>
                    </div>

                    <div className={this.state.moquillo ? '' : 'hidden'}>
                        <label>
                            Moquillo:
                        <input type="checkbox" name="moquillo" />
                        </label>
                    </div>

                    <div className={this.state.hepatitis ? '' : 'hidden'}>
                        <label>
                            Hepatitis:
                        <input type="checkbox" name="hepatitis" />
                        </label>
                    </div>

                    <div className={this.state.parainfluenza ? '' : 'hidden'}>
                        <label>
                            Parainfluenza:
                        <input type="checkbox" name="parainfluenza" />
                        </label>
                    </div>

                    <div className={this.state.leptospirosis ? '' : 'hidden'}>
                        <label>
                            Leptospirosis:
                        <input type="checkbox" name="leptospirosis" />
                        </label>
                    </div>

                    <div className={this.state.rinotraqueitis ? '' : 'hidden'}>
                        <label>
                            Rinotraqueitis:
                        <input type="checkbox" name="rinotraqueitis" />
                        </label>
                    </div>

                    <div className={this.state.clamidosis ? '' : 'hidden'}>
                        <label>
                            Clamidosis:
                        <input type="checkbox" name="clamidosis" />
                        </label>
                    </div>

                    <div className={this.state.calicivoris ? '' : 'hidden'}>
                        <label>
                            Parvovirus:
                        <input type="checkbox" name="parvovirus" />
                        </label>
                    </div>

                    <div className={this.state.rabia ? '' : 'hidden'}>
                        <label>
                            Rabia:
                        <input type="checkbox" name="rabia" />
                        </label>
                    </div>


                </label>
                </Row>
                <Row>
                <button type="submit"> Enviar </button>
                </Row>
                <Row>
                <div>
                    <p>CONSULTAR SIEMPRE CON SU VETERINARIO</p>
                </div>
                </Row>
            </Grid>
        );
    }

}
export default Vaccine;