import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavSite extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <NavDropdown title="Dofus" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link to="/dofus" class='center'>dofus</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Wakfu" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link to="/wakfu" class='center'>Wakfu</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Autres_Univers" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link to="/autres-univers">Autres_Univers</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <NavDropdown title="Jeux de société" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link to="/jeux-de-societe">Jeux de société</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Livres" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link to="/livres">Livres</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Produits dérivés" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link to="/produits-derives">Produits dérivés</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        );
    }
}

export default NavSite;