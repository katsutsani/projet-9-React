import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavSite from './Navbar';
import FooterPage from './Footer';
import { FaTrash } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
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

class Panier extends Component {
  render() {
    return (
      <>
        <NavSite panier={this.props.panier} />
        <Container className="contain_articlePanier">
          <Row>
            <h2 className="text-uppercase font-weight-bold">panier</h2>
          </Row>
          <ColoredLine color="black" />
          <Row>
            <Col sm={3}>
              <Row>
                <p class='text-center'>Produit</p>
              </Row>
            </Col>
            <Col sm={6}>
              <Row>
                <p class='text-center'>Description</p>
              </Row>
            </Col>
            <Col sm={2}>
              <Row>
                <p class='text-center'>Prix unitaire</p>
              </Row>
            </Col>
            <Col sm={1}>
              <Row>
                <p class='text-center'>Modif</p>
              </Row>
            </Col>
          </Row>
          <ColoredLine color="black" />
          {this.props.panier && this.props.panier.map((article) =>
            <>
              <Row>
                <Col sm={3}>
                  <Row>
                    {article.attributes.image.data[0].attributes.url ? (
                      <>
                        <img class="ImgCard w-50" variant="top" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                      </>
                    ) : ("")}
                  </Row>
                </Col>
                <Col sm={6}>
                  <Row>
                    <p>{article.attributes.name}<br/><br/>{article.attributes.description}</p>
                  </Row>
                </Col>
                <Col sm={2}>
                  <Row>
                  <p>{article.attributes.prix}</p>
                  </Row>
                </Col>
                <Col sm={1}>
                  <Row>
                    <Col className='d-flex align-items-center justify-content-center'>
                      <IconContext.Provider value={{ color: "black", size: '25px' }}>
                        <div>
                          < FaTrash />
                        </div>
                      </IconContext.Provider>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                      <IconContext.Provider value={{ color: "black", size: '25px' }}>
                        <div>
                          <Link to={"/article/"+article.id}><FiExternalLink /></Link>
                        </div>
                      </IconContext.Provider>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <ColoredLine color="black" />
            </>
          )}
        </Container>
        <Button onClick={() => this.props.commande()}>Commander</Button>
        <FooterPage />
      </>
    );
  }
}

export default Panier;