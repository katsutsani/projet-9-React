import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
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
                    <Col>
                      <Card className="carte">
                        {article.image.data[0].attributes.url ? (
                          <>
                            <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.image.data[0].attributes.url} />
                            <Card.Body>
                              <Card.Title className='titleCardImgPanier'>
                                {article.name}
                              </Card.Title>
                              <Card.Text className='descCardImgPanier'>
                                {article.description}
                              </Card.Text>
                              <Button className="viewButtonImgPanier" onClick={() => this.LinkToArticle(article.id)}>View</Button>
                            </Card.Body>
                          </>
                        ) : (
                          <>
                            <Card.Body>
                              <Card.Title className='titleCardPanier'>
                                {article.name}
                              </Card.Title>
                              <Card.Text className='descCardPanier'>
                                {article.description}
                              </Card.Text>
                              <Button className="viewButtonPanier" onClick={() => this.LinkToArticle(article.id)}>View</Button>
                            </Card.Body>
                          </>
                        )}

                      </Card>
                    </Col>
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