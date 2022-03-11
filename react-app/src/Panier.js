import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import NavSite from './Navbar';
import FooterPage from './Footer';
import { FaTrash } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

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
            <Col sm={2}>
              <Row>
                <h5 class='text-center'>Produit</h5>
              </Row>
            </Col>
            <Col sm={6}>
              <Row>
                <h5 class='text-center'>Description</h5>
              </Row>
            </Col>
            <Col sm={2}>
              <Row>
                <h5 class='text-center'>Prix unitaire</h5>
              </Row>
            </Col>
            <Col sm={2}>
              <Row>
                <h5 class='text-center'>Modification</h5>
              </Row>
            </Col>
          </Row>
          <ColoredLine color="black" />
          {this.props.panier && this.props.panier.map((article) =>
            <>
              <Row>
                <Col sm={2}>
                  <Row>
                    {article.attributes.image.data[0].attributes.url ? (
                      <>
                        <img
                          class="ImgCard w-50"
                          variant="top"
                          src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} 
                          className="d-flex justify-content-center"/>
                      </>
                    ) : ("")}
                  </Row>
                </Col>
                <Col sm={6}>
                  <Row>
                    <p>{article.attributes.name}<br /><br />{article.attributes.description}</p>
                  </Row>
                </Col>
                <Col sm={2}>
                  <Row>
                    <p  class="text-center">{article.attributes.prix} €</p>
                  </Row>
                </Col>
                <Col sm={2}>
                  <Row className="d-flex align-item-center">
                    <Col>
                      <IconContext.Provider value={{ color: "black", size: '25px' }}>
                        <div className="d-flex align-item-center justify-content-end">
                          < FaTrash onClick={() => this.props.rmArticleToCart(article.attributes.name)} />
                        </div>
                      </IconContext.Provider>
                    </Col>
                    <Col>
                      <IconContext.Provider value={{ color: "black", size: '25px' }}>
                        <div className="d-flex align-item-center justify-content-start">
                          <Link to={"/article/" + article.id}><FiExternalLink /></Link>
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
        <Container className="pt-4">
          <Row>
            <Col className="d-grid gap-2">
              <Button
                size="lg"
                variant="outline-dark"
                onClick={() => this.props.commande()}
                >Commander
              </Button>
            </Col>
          </Row>
        </Container>
        <FooterPage />
      </>
    );
  }
}

export default Panier;