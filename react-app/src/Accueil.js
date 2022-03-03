import React, { Component } from 'react';
import { Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap'
import NavSite from './Navbar';

class Accueil extends Component {

  render() {
    return (
      <>
        <NavSite />
        <Carousel className=''>
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
        <Container>
          <Row>
            <Col>
              <h2 className="text-uppercase mt-4">nouveautés</h2>
            </Col>
          </Row>
        </Container>
        <Carousel variant="dark">
          <Carousel.Item>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>

          </Carousel.Item>
          <Carousel.Item>

          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Accueil;