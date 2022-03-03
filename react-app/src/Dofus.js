import React, { Component } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import NavSite from './Navbar';

class Dofus extends Component {

  render() {
    return (
      <>
        <NavSite />
        <Container className="contain_article">
          <Row>
            <Col xs lg="3" className="search">
              <h2 class="text-center">Catégories</h2>
              <Form.Select size="sm">
                <option>Small select</option>
              </Form.Select>
              <h2 class="text-center">Sous-catégories</h2>
              <Form.Select size="sm">
                <option>Small select</option>
              </Form.Select>
              <h2 class="text-center">Univers</h2>
              <Form.Select size="sm">
                <option>Small select</option>
              </Form.Select>
            </Col>
            <Col xs lg="2"></Col>
            <Col className="around_articles"><Row xs={1} md={1} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Dofus;