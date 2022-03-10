import React, { Component } from 'react';
import { Card, Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import NavSite from './Navbar';
import FooterPage from './Footer';

class Accueil extends Component {


  render() {
    return (
      <>
        <NavSite panier={this.props.panier}/>
        <Carousel fade indicators={false} interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://localhost:1337/uploads/tofu_royal_f2cda04568.JPG?updated_at=2022-03-03T18:10:43.717Z"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://localhost:1337/uploads/unfollow_455f256cb1.JPG?updated_at=2022-03-03T18:10:43.730Z"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://localhost:1337/uploads/mutafukaz_a2c922a54a.JPG?updated_at=2022-03-03T18:06:13.938Z"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://localhost:1337/uploads/tapis_souris_iop_159fa5ac8e.JPG?updated_at=2022-03-03T18:10:43.718Z"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
        <Container className="mt-5 mb-2">
          <Row>
            <Col>
              <h2 className="text-uppercase">nouveautés</h2>
            </Col>
          </Row>
        </Container>
        <Carousel variant="dark" className='w-20' indicators={false} interval={null}>
          <Carousel.Item className='text-center'>
            <Container>
              <Row>
                <Col>
                  <Container className='p-0'>
                    <Row>
                      <Col>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="http://localhost:1337/uploads/unfollow_jueliger_f446f8a253.png?updated_at=2022-03-04T13:30:13.534Z" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quiclasck example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="outline-dark" className="text-uppercase">voir</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="http://localhost:1337/uploads/mutafukaz_1886_integrale_run_hutt_153dd9e526.png?updated_at=2022-03-04T13:30:13.510Z" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="outline-dark" className="text-uppercase">voir</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="http://localhost:1337/uploads/peluche_tofu_royal_dofus_b19b339e24.png?updated_at=2022-03-04T13:30:13.493Z" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="outline-dark" className="text-uppercase">voir</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="http://localhost:1337/uploads/adlivun_balzano_ce74be1ad4.png?updated_at=2022-03-04T13:30:13.492Z" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="outline-dark" className="text-uppercase">voir</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className='text-center'>
            <Container>
              <Row>
                <Col>
                  <Container className='p-0'>
                    <Row>
                      <Col>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="http://localhost:1337/uploads/pack_2_bieres_75_cl_la_shushette_dbdb36b256.png?updated_at=2022-03-04T13:30:13.476Z" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quiclasck example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="outline-dark" className="text-uppercase">voir</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="http://localhost:1337/uploads/bouteille_reutilisable_princesse_dragon_f5b50a23b3.png?updated_at=2022-03-04T13:30:13.471Z" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="outline-dark" className="text-uppercase">voir</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="http://localhost:1337/uploads/coffret_pendentifs_dofus_ebene_et_ivoire_en_cristal_3eb2a0388c.png?updated_at=2022-03-04T14:44:22.231Z" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="outline-dark" className="text-uppercase">voir</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="http://localhost:1337/uploads/genpet_damian_fuentes_486b5b2b2c.png?updated_at=2022-03-04T14:44:22.291Z" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="outline-dark" className="text-uppercase">voir</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
        <FooterPage />
      </>
    );
  }
}

export default Accueil;