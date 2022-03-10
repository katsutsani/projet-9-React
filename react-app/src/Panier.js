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
          <Row>
            <Col sm={3}>
              <Row>
                requette image
              </Row>
            </Col>
            <Col sm={6}>
              <Row>
                requette description / titre
              </Row>
            </Col>
            <Col sm={2}>
              <Row>
                Prix
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
                      <FiExternalLink />
                    </div>
                  </IconContext.Provider>
                </Col>
              </Row>
            </Col>
          </Row>
          <ColoredLine color="black" />




          <Row>
            <Col className="around_articles">
              <Row xs={1} md={1} className="g-4">
                {
                  this.props.panier && this.props.panier.map((article) =>
                    <>
                      {console.log(article)}
                      <Col>
                        <Card className="carte">
                          {article.attributes.image.data[0].attributes.url ? (
                            <>
                              <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                              <Card.Body>
                                <Card.Title className='titleCardImgPanier'>
                                  {article.attributes.name}
                                </Card.Title>
                                <Card.Text className='descCardImgPanier'>
                                  {article.attributes.description}
                                </Card.Text>
                                <Link to={"/article/" + article.id}><Button className="viewButtonImgPanier">View</Button></Link>

                              </Card.Body>
                            </>
                          ) : (
                            <>
                              <Card.Body>
                                <Card.Title className='titleCardPanier'>
                                  {article.attributes.name}
                                </Card.Title>
                                <Card.Text className='descCardPanier'>
                                  {article.attributes.description}
                                </Card.Text>
                                <Link to={"/article/" + article.id}><Button className="viewButtonPanier">View</Button></Link>

                              </Card.Body>
                            </>
                          )}

                        </Card>
                      </Col>
                    </>

                  )
                }
              </Row>
            </Col>

          </Row>
        </Container>
        <FooterPage />
      </>
    );
  }
}

export default Panier;