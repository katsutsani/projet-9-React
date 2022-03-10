import React, { Component } from 'react';
import { Button, ButtonGroup, Col, Container, Dropdown, Row } from 'react-bootstrap'
import NavSite from './Navbar';
import FooterPage from './Footer';
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillCreditCard, AiFillTwitterCircle, AiOutlineRollback, AiOutlineShopping } from "react-icons/ai";
import { IconContext } from "react-icons";

class Article extends Component {

    render() {
        return (
            <>
                <NavSite />
                <Container>
                    <Row>
                        <h2 className="text-uppercase">peluche roufoux</h2>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                className="w-100"
                                src="http://localhost:1337/uploads/peluche_roufoux_a291e2c858.png?updated_at=2022-03-10T00:52:19.332Z"
                                alt="Peluche"
                            />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    Aussi adorable que doux, le Roufoux
                                    est un panda roux qui hooouuukilémignonchoupidoudoutouplinceluilààà
                                    !! Gouzigouziiiiii ! C’est le Roufoux à sa maman ?? C’eeest le Roufoux
                                    à sa maman, ça ?? Oooh, mais ouiii ! C’est le Roufoux à sa maman !
                                    Bref. Vous l’aurez compris : le Roufoux va vous rendre complètement foux.
                                </Col>
                            </Row>
                            <Row>
                                <Col>Prix : 17euros</Col>
                                <Col>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="success" className="text-uppercase" href="">acheter</Button>

                                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                            <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                            <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Vous aimez ce produit ? Partagez-le !</Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <a
                                                href="https://twitter.com/ankamaeditions"
                                                target="_blank">
                                                <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                                    <div>
                                                        <AiFillTwitterCircle />
                                                    </div>
                                                </IconContext.Provider>
                                            </a>
                                        </Col>
                                        <Col>                                <a
                                            href="https://fr-fr.facebook.com/DOFUS"
                                            target="_blank">
                                            <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                                <div>
                                                    <BsFacebook />
                                                </div>
                                            </IconContext.Provider>
                                        </a>
                                        </Col>
                                        <Col>                                <a
                                            href="https://www.youtube.com/user/AnkamaTV"
                                            target="_blank">
                                            <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                                <div>
                                                    <BsYoutube />
                                                </div>
                                            </IconContext.Provider>
                                        </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Row>
                                    <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                        <Col className='d-flex justify-content-around'>
                                            <AiOutlineShopping />
                                        </Col>
                                        <Col className='d-flex justify-content-around'>
                                            <AiOutlineRollback />
                                        </Col>
                                        <Col className='d-flex justify-content-around'>
                                            <AiFillCreditCard />
                                        </Col>
                                    </IconContext.Provider>
                                </Row>
                                <Row className='text-uppercase text-center'>
                                    <Col>livraison en france et à l'international</Col>
                                    <Col>retours gratuits</Col>
                                    <Col>paiement sécurisé</Col>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <FooterPage />
            </>
        );
    }
}

export default Article;