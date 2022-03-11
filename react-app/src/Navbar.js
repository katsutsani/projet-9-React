import React, { Component } from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";

class NavSite extends Component {
    render() {
        var total = 0
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/">
                                <img
                                    src="http://localhost:1337/uploads/ankama_shop_logo_1630939642_3b98930683.png?updated_at=2022-03-10T23:41:29.326Z"
                                    className="d-inline-block align-top"
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/dofus" class='center text-decoration-none' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()) : ("")}>Dofus</Link></Nav.Link>
                                <Nav.Link><Link to="/wakfu" class='center text-decoration-none' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()) : ("")}>Wakfu</Link></Nav.Link>
                                <Nav.Link><Link to="/autres-univers" class='center text-decoration-none' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()) : ("")}>Autres_Univers</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link><Link to="/jeux-de-societe" class='center text-decoration-none' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()) : ("")}>Jeux de société</Link></Nav.Link>
                                <Nav.Link><Link to="/livres" class='center text-decoration-none' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()) : ("")}>Livres</Link></Nav.Link>
                                <Nav.Link><Link to="/produits-derives" class='center text-decoration-none' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()) : ("")}>Produits dérivés</Link></Nav.Link>
                                <Navbar.Brand>
                                    <Link to="/panier">
                                        <IconContext.Provider value={{ color: "white", size: '30px' }}>
                                            <div>
                                                <FaShoppingCart />
                                            </div>
                                        </IconContext.Provider>
                                    </Link>
                                </Navbar.Brand>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default NavSite;