import React, { Component } from 'react';
import { Button, ButtonGroup, Col, Container, Dropdown, Row } from 'react-bootstrap'
import NavSite from './Navbar';
import FooterPage from './Footer';
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillCreditCard, AiFillTwitterCircle, AiOutlineRollback, AiOutlineShopping } from "react-icons/ai";
import { IconContext } from "react-icons";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
);

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
                            <Row className="p-3">
                                <Col>
                                    Aussi adorable que doux, le Roufoux
                                    est un panda roux qui hooouuukilémignonchoupidoudoutouplinceluilààà
                                    !! Gouzigouziiiiii ! C’est le Roufoux à sa maman ?? C’eeest le Roufoux
                                    à sa maman, ça ?? Oooh, mais ouiii ! C’est le Roufoux à sa maman !
                                    Bref. Vous l’aurez compris : le Roufoux va vous rendre complètement foux.
                                </Col>
                            </Row>
                            <Row className="p-3">
                                <Col className="d-flex align-items-center">Prix : 17euros</Col>
                                <Col className="d-flex justify-content-end" >
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="#ffffff" className="text-uppercase" href="">acheter</Button>
                                        <Dropdown.Toggle split variant="#ffffff" id="dropdown-split-basic" />
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
                            <ColoredLine color="black" />
                            <Row className="p-2">
                                <Col className="d-flex align-items-center">Vous aimez ce produit ? Partagez-le !</Col>
                                <Col>
                                    <Row>
                                        <Col className="d-flex justify-content-end align-items-center">
                                            <a
                                                href="https://twitter.com/ankamaeditions"
                                                target="_blank"
                                                className="p-1">
                                                <IconContext.Provider value={{ color: "#78C4FF", size: '47px' }}>
                                                    <div>
                                                        <AiFillTwitterCircle />
                                                    </div>
                                                </IconContext.Provider>
                                            </a>
                                            <a
                                                href="https://fr-fr.facebook.com/DOFUS"
                                                target="_blank"
                                                className="p-1">
                                                <IconContext.Provider value={{ color: "#657CCD", size: '40px' }}>
                                                    <div>
                                                        <BsFacebook />
                                                    </div>
                                                </IconContext.Provider>
                                            </a>
                                            <a
                                                href="https://www.youtube.com/user/AnkamaTV"
                                                target="_blank"
                                                className="p-1">
                                                <IconContext.Provider value={{ color: "#C3171D", size: '45px' }}>
                                                    <div>
                                                        <BsYoutube />
                                                    </div>
                                                </IconContext.Provider>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <ColoredLine color="black" />
                            <Row className="p-3">
                                <Col>
                                    <Row>
                                        <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                            <Col className='d-flex justify-content-center'>
                                                <AiOutlineRollback />
                                            </Col>
                                        </IconContext.Provider>
                                    </Row>
                                    <Row>
                                        <p class='text-center text-uppercase'>retours gratuits</p>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                            <Col className='d-flex justify-content-center'>
                                                <AiOutlineShopping />
                                            </Col>
                                        </IconContext.Provider>
                                    </Row>
                                    <Row>
                                        <p class='text-center text-uppercase'>livraison en france et à l'international</p>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                            <Col className='d-flex justify-content-center'>
                                                <AiFillCreditCard />
                                            </Col>
                                        </IconContext.Provider>
                                    </Row>
                                    <Row>
                                        <p class='text-center text-uppercase'>paiement sécurisé</p>
                                    </Row>
                                </Col>
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