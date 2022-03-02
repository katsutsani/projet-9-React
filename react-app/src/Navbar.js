import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavSite extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Dofus" renderMenuOnMount={true}>
                                    <NavDropdown.Item><Link to="/dofus" class='center'>Dofus</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Wakfu" id="collasible-nav-dropdown" renderMenuOnMount={true}>
                                    <NavDropdown.Item><Link to="/wakfu" class='center'>Wakfu</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Autres_Univers" id="collasible-nav-dropdown" renderMenuOnMount={true} onClick="renderMenuOnMount={false}">
                                    <NavDropdown.Item><Link to="/autres_univers">Autres_Univers</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <NavDropdown title="Jeux de société" id="collasible-nav-dropdown" renderMenuOnMount={true}>
                                    <NavDropdown.Item><Link to="/">Jeux de société</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Livres" id="collasible-nav-dropdown" renderMenuOnMount={true}>
                                    <NavDropdown.Item><Link to="/">Livres</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/"></Link>Another action</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Something</NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/"></Link>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Produits dérivés" id="collasible-nav-dropdown" renderMenuOnMount={true}>
                                    <NavDropdown.Item><Link to="/">Produits dérivés</Link></NavDropdown.Item>
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