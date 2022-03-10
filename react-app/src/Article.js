import React, { Component } from 'react';
import { Button, ButtonGroup, Col, Container, Dropdown, Row } from 'react-bootstrap'
import NavSite from './Navbar';
import FooterPage from './Footer';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

class Article extends Component {

    render() {
        return (
            <>
                <NavSite />
                <Container>
                    <Row>
                        <Col>Peluche Roufoux</Col>
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
                        </Col>
                    </Row>
                </Container>
                <FooterPage />
            </>
        );
    }
}

export default Article;