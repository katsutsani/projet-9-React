import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavSite from './Navbar';

class Panier extends Component {
  render() {
    return (
      <>
        <NavSite panier={this.props.panier} />
        <Container className="contain_articlePanier">
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
      </>
    );
  }
}

export default Panier;