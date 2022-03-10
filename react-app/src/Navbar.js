import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                                    src="/logo.svg"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/dofus" class='center' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()):("")}>Dofus</Link></Nav.Link>
                                <Nav.Link><Link to="/wakfu" class='center'onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()):("")}>Wakfu</Link></Nav.Link>
                                <Nav.Link><Link to="/autres-univers" class='center' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()):("")}>Autres_Univers</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link><Link to="/jeux-de-societe" class='center' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()):("")}>Jeux de société</Link></Nav.Link>
                                <Nav.Link><Link to="/livres" class='center' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()):("")}>Livres</Link></Nav.Link>
                                <Nav.Link><Link to="/produits-derives" class='center' onClick={this.props.getInitialValue ? (() => this.props.getInitialValue()):("")}>Produits dérivés</Link></Nav.Link>
                                <Navbar.Brand>
                                    <Link to="/panier">
                                        <img
                                            src="/logo.svg"
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-top"
                                        />
                                    </Link>
                                </Navbar.Brand>
                                <Nav.Link>{this.props.panier ? (
                                    <>
                                    {this.props.panier.forEach(element => {
                                            total++
                                        })}
                                        <p className="nbArticle">{total}</p>
                                    </>

                                ) : ("0"
                                )}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        );
    }
}

export default NavSite;