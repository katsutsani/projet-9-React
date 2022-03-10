import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

class FooterPage extends Component {
    render() {
        return (
            <Container className='mt-5'>
                <Row>
                    <Col className='d-flex align-items-start flex-column'>
                        <Row className='mb-auto p-2'>
                            <Col className='text-uppercase mt-2 mb-2'>
                                nos moyens de paiements
                            </Col>
                        </Row>
                        <Row className='p-2'>
                            <a href="https://www.ankama-shop.com/fr/content/5-paiement-securise"
                                target="_blank">
                                <img
                                    className="w-100"
                                    src="http://localhost:1337/uploads/paiement_0bc870b979.png?updated_at=2022-03-07T16:14:33.661Z"
                                    alt="Moyen securisé"
                                />
                            </a>
                        </Row>
                        <Row className='p-1'>
                            <a
                                href="https://support.ankama.com/hc/fr/requests/new"
                                target="_blank"
                                className='text-decoration-none'>
                                Contacter notre service client
                            </a>
                        </Row>
                    </Col>
                    <Col className='d-flex align-items-start flex-column'>
                        <Row className='mb-auto p-1 mt-2'>
                            <Col className='text-uppercase'>
                                les engagements d'ankama
                            </Col>
                        </Row>
                        <Row className='p-1'>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/1-livraison"
                                    target="_blank"
                                    className='text-decoration-none mt-1'>
                                    Livraison
                                </a>
                            </Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/9-service-clients-contact"
                                    target="_blank"
                                    className='text-decoration-none mt-1'>
                                    SAV / Contact
                                </a>
                            </Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/5-paiement-securise"
                                    target="_blank"
                                    className='text-decoration-none mt-1'>
                                    Paiements / sécurité
                                </a>
                            </Row>
                        </Row>
                    </Col>
                    <Col className='d-flex align-items-start flex-column'>
                        <Row className='mb-auto p-1'>
                            <Col className='text-uppercase mt-2'>
                                informartions
                            </Col>
                        </Row>
                        <Row className='p-1'>
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
                                    className='text-decoration-none text-uppercase mt-1'>
                                    cgv
                                </a>
                            </Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/2-mentions-legales"
                                    target="_blank"
                                    className='text-decoration-none mt-1'>
                                    Mentions légales
                                </a>
                            </Row>
                            <Row>
                                <a href="https://www.ankama-shop.com/fr/content/13-politique-de-confidentialite"
                                    target="_blank"
                                    className='text-decoration-none mt-1'>
                                    Politique de confidentialité
                                </a>
                            </Row>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className='text-uppercase mt-2 mb-2'>
                                ankama sur les réseaux
                            </Col>
                        </Row>
                        <Row className='mt-3' xs="auto">
                            <Col className='p-2'>
                                <a
                                    href="https://twitter.com/ankamaeditions"
                                    target="_blank">
                                    <IconContext.Provider value={{ color: "black", size: '30px' }}>
                                        <div>
                                            <AiFillTwitterCircle />
                                        </div>
                                    </IconContext.Provider>
                                </a>
                            </Col>
                            <Col className='p-2'>
                                <a
                                    href="https://fr-fr.facebook.com/DOFUS"
                                    target="_blank">
                                    <IconContext.Provider value={{ color: "black", size: '30px' }}>
                                        <div>
                                            <BsFacebook />
                                        </div>
                                    </IconContext.Provider>
                                </a>
                            </Col>
                            <Col className='p-2'>
                                <a
                                    href="https://www.youtube.com/user/AnkamaTV"
                                    target="_blank">
                                    <IconContext.Provider value={{ color: "black", size: '30px' }}>
                                        <div>
                                            <BsYoutube />
                                        </div>
                                    </IconContext.Provider>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='m-2 d-flex align-items-center'>
                    <Col className='d-flex justify-content-end'>
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
                    <Col className='text-left'>Copyright© 2022 Ankama. Tous droits réservés</Col>
                </Row>
            </Container>

        )
    };
}

export default FooterPage;