//componenetes generales
import React from 'react'
//componentes diseño
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

//otras clases
import './Animal.js'
import Footer from '/home/lucila/Project/animaladas/src/Parapachin/footer.js'

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
            rabia: false,
            weeks: 0
        };
    };
    componentWillMount(){
            var days = 113;
            if (days >= 42 && days <= 49) {
                this.weeks = 6;
            } else if (days >= 56 && days <= 63) {
                this.weeks = 8;
            } else if (days >= 84 && days <= 91) {
                this.weeks = 12;
            } else if (days >= 112 && days <= 119) {
                this.weeks = 16;
            } else if (days >= 126 && days <= 133) {
                this.weeks = 18;
            } else if(days > 365){
                this.weeks= 53;
            }

            this.setState({weeks:this.weeks})
    
            if (this.weeks === 8 || this.weeks === 12) {
                this.setState({
                    leptospirosis : true,
                    rinotraqueitis : true,
                    calicivoris : true,
                    clamidosis : true
                })
            }if (this.weeks === 8 || this.weeks === 12 || this.weeks === 6 || this.weeks === 18) {
                this.setState({
                    parvovirus : true,
                    adenovirus : true,
                    coronanavirus : true,
                    moquillo : true,
                    hepatitis : true,
                    parainfluenza : true,
                })
            }if (this.weeks>52){
                this.setState({
                    leptospirosis : true,
                    rinotraqueitis : true,
                    calicivoris : true,
                    clamidosis : true,
                    parvovirus : true,
                    adenovirus : true,
                    coronanavirus : true,
                    moquillo : true,
                    hepatitis : true,
                    parainfluenza : true,
                    rabia : true,
                })
                }else if (this.weeks === 16) {
                    this.setState({rabia : true})
                }
        }
    
    handleChangeVaccine = (selectedOption) => {
        this.setState({ vaccine: selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
   
    render() {
        return (
            <Grid>
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                    <h4>Vacunas recomendadas para las semanas que posee tu animal:</h4>
                    </Col>
                </Row>
                <br />
                <br />
                <Grid className="heigthVaccineMin">
                        <Row className={this.state.parvovirus ? 'colVaccine' : 'hidden'}>
                            <Col xs={6} md={6} className="inputLabel">
                                    <p >Parvovirus:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="parvovirus"/>
                            </Col>
                        </Row>

                        <Row className={this.state.adenovirus ? 'colVaccine' : 'hidden'}>
                            <Col xs={6} md={6} className="inputLabel">
                                    <p >Adenovirus:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="adenovirus"/>
                            </Col>
                        </Row>

                        <Row className={this.state.coronanavirus ? 'colVaccine' : 'hidden'}>
                           <Col xs={6} md={6} className="inputLabel">
                                    <p>Coronanavirus:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name=" coronanavirus"/>
                            </Col>
                        </Row>

                        <Row  className={this.state.moquillo ? 'colVaccine' : 'hidden'}>
                            <Col xs={6} md={6} className="inputLabel">
                                    <p>Moquillo:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="moquillo"/>
                            </Col>
                        </Row>

                        <Row className={this.state.hepatitis ? 'colVaccine' : 'hidden'}>
                            <Col xs={6} md={6} className="inputLabel">
                                    <p> Hepatitis:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="hepatitis"/>
                            </Col>
                         </Row>

                        <Row className={this.state.parainfluenza ? 'colVaccine' : 'hidden'}>
                            <Col xs={6} md={6} className="inputLabel">
                                    <p> Parainfluenza:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="parainfluenza"/>
                            </Col>
                         </Row>

                        <Row className={this.state.leptospirosis ? 'colVaccine' : 'hidden'}>
                           <Col xs={6} md={6} className="inputLabel">
                                    <p>Leptospirosis:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="leptospirosis"/>
                            </Col>
                         </Row>

                        <Row className={this.state.rinotraqueitis ? 'colVaccine' : 'hidden'}>
                          <Col xs={6} md={6}  className="inputLabel">
                                    <p> Rinotraqueitis:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="rinotraqueitis"/>
                            </Col>
                         </Row>

                        <Row className={this.state.clamidosis ? 'colVaccine' : 'hidden'}>
                           <Col xs={6} md={6}  className="inputLabel">
                                    <p> Clamidosis:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="clamidosis"/>
                            </Col>
                         </Row>

                        <Row className={this.state.calicivoris ? 'colVaccine' : 'hidden'}>
                           <Col xs={6} md={6}  className="inputLabel">
                                    <p> Parvovirus:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="parvovirus"/>
                            </Col>
                         </Row>

                        <Row className={this.state.rabia ? 'colVaccine' : 'hidden'}>
                           <Col xs={6} md={6}  className="inputLabel">
                                    <p> Rabia:</p>
                            </Col>
                            <Col xs={6} md={6}  className="inputLabel">
                                    <input type="checkbox" name="rabia"/>
                            </Col>
                        </Row>
                        </Grid>
                        <Row>
                            <Col xs={12} md={12}>
                                <p>CONSULTAR SIEMPRE CON SU VETERINARIO</p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs={12} md={12} className="botones">
                            <button type="submit"> Enviar </button>
                        </Col>
                    </Row>
            </Grid>          
                        <Row className="footerFixed">
                            <Col xs={12} md={12}>
                                    <Footer />
                            </Col>
                        </Row>
           </Grid>
        );
    }

}
export default Vaccine;