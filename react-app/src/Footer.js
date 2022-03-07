import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

class FooterPage extends Component {
    render() {
        return (
            <Container className='mt-5 mb-2'>
                <Row className='ml-2 mr-2'>
                    <Col>
                        <Row className='text-uppercase'>nos moyens de paiements</Row>
                        <Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/5-paiement-securise"
                                    target="_blank">
                                    <img
                                        className="w-50"
                                        src="http://localhost:1337/uploads/paiement_0bc870b979.png?updated_at=2022-03-07T16:14:33.661Z"
                                        alt="Moyen securisé"
                                    />
                                </a>
                            </Row>
                            <Row>
                                <a
                                    href="https://support.ankama.com/hc/fr/requests/new"
                                    target="_blank"
                                    className='text-decoration-none'>
                                    <img
                                        className="w-20"
                                        src="http://localhost:1337/uploads/service_4d95e3f7df.png?updated_at=2022-03-07T16:14:33.622Z"
                                        alt="Contacter notre service client"
                                    />
                                    Contacter notre service client
                                </a>
                            </Row>
                        </Row>
                    </Col>
                    <Col>
                        <Row className='text-uppercase'>les engagements d'ankama</Row>
                        <Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/1-livraison"
                                    target="_blank"
                                    className='text-decoration-none'>
                                    Livraison
                                </a>
                            </Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/9-service-clients-contact"
                                    target="_blank"
                                    className='text-decoration-none'>
                                    SAV / Contact
                                </a>
                            </Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/5-paiement-securise"
                                    target="_blank"
                                    className='text-decoration-none'>
                                    Paiements / sécurité
                                </a>
                            </Row>
                        </Row>
                    </Col>
                    <Col>
                        <Row className='text-uppercase'>informartions</Row>
                        <Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/10-faq"
                                    target="_blank"
                                    className='text-decoration-none text-uppercase'>
                                    faq
                                </a>
                            </Row>
                            <Row className='text-uppercase'>
                                <a href="https://www.ankama-shop.com/fr/content/8-CGV"
                                    target="_blank"
                                    className='text-decoration-none text-uppercase'>
                                    cgv
                                </a>
                            </Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/2-mentions-legales"
                                    target="_blank"
                                    className='text-decoration-none'>
                                    Mentions légales
                                </a>
                            </Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/13-politique-de-confidentialite"
                                    target="_blank"
                                    className='text-decoration-none'>
                                    Politique de confidentialité
                                </a>
                            </Row>
                        </Row>
                    </Col>
                    <Col>
                        <Row className='text-uppercase'>ankama sur les réseaux</Row>
                        <Row className='d-flex justify-content-around'>
                            <Col>
                                <a
                                    href="https://fr-fr.facebook.com/DOFUS"
                                    target="_blank">
                                    <BsFacebook />
                                </a>
                            </Col>
                            <Col>
                                <a
                                    href="https://twitter.com/ankamaeditions"
                                    target="_blank">
                                    <AiFillTwitterCircle />
                                </a>
                            </Col>
                            <Col>
                                <a
                                    href="https://www.youtube.com/user/AnkamaTV"
                                    target="_blank">
                                    <BsYoutube />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-around'>
                    <Col>
                        <a
                            href="https://www.ankama-shop.com/fr/"
                            target="_blank">
                            <img
                                className="w-20"
                                src="http://localhost:1337/uploads/logo_footer_2b1681f24c.png?updated_at=2022-03-07T14:44:08.124Z"
                                alt="Logo Ankama"
                            />
                        </a>
                    </Col>
                    <Col>Copyright© 2022 Ankama. Tous droits réservés</Col>
                </Row>
            </Container>

        )
    };
}

export default FooterPage;