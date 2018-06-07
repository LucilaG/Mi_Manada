//componenetes generales
import React from 'react';
//componentes diseño
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import './forms.css';

export class Footer extends React.Component {
render(){
    return(
        <Grid className="heigthFooter"> 
            <Row>
                 <Col xs={12} md={3} className="MeCanseDeInventarNombres">
                    <button className="buttonFooter">
                     <img src={"imag/facebook.png"} alt="Facebook Link" className="imagFooter"/>
                        Facebook
                     </button>
                 </Col>
                <Col xs={12} md={3}>
                    <button className="buttonFooter">
                     <img src={"imag/instagram.png"} alt="Instagram Link" className="imagFooter"/>
                        Instagram
                    </button>
                </Col>
                <Col xs={12} md={3}>
                    <button className="buttonFooter">
                    <img src={"imag/twitter.png"} alt="Twitter Link" className="imagFooter"/>
                        Twitter
                    </button>
                </Col>
                <Col xs={12} md={3}>
                    <button className="buttonFooter">
                    <img src={"imag/mail.png"} alt="MailLink" className="imagFooter"/>
                        Mail
                    </button>
                </Col>
            </Row>
            <Row className="pFooter">
                <Col xs={12} md={12} >
                    <p > Desarrollado por Lucila Gaudio en Sinequix S.A.</p>
                </Col>
            </Row>
        </Grid>
    )
}
}
export default Footer;
