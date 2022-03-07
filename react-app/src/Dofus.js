import React, { Component } from 'react';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavSite from './Navbar';

function Dofus(props) {
  var category = null;
  var Univers = null;
  const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  return (
    <>
      <NavSite />
      <Container className="contain_article">
        <Row>
          <Col xs lg="3" className="search">
            <h2 class="text-center">Catégories</h2>
            <Dropdown className="text-center">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown_search text-black">
                choisir une Catégorie
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {props.categories && props.categories.map((category) =>
                  <Dropdown.Item><Link to={"/"+category.attributes.name.toLowerCase()}>{category.attributes.name}</Link></Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <h2 class="text-center">Sous-catégories</h2>
            <Dropdown className="text-center">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown_search text-black">
                choisir une Sous-catégorie
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {props.sub_categories && props.sub_categories.map((sub_category) =>
                  <Dropdown.Item><Link to={window.location.pathname+"?"+sub_category.attributes.name.toLowerCase()}>{sub_category.attributes.name}</Link></Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <h2 class="text-center">Univers</h2>
            <Dropdown className="text-center">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown_search text-black">
                choisir un Univers
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {props.Universs && props.Universs.map((Univers) =>
                  <Dropdown.Item><Link to={"/"+Univers.attributes.name.toLowerCase()}>{Univers.attributes.name}</Link></Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs lg="2"></Col>
          <Col className="around_articles"><Row xs={1} md={1} className="g-4">
            {props.articles && props.articles.map((article) =>
              article.attributes.category.data ? (
                category = "/" + article.attributes.category.data.attributes.name.toLowerCase(),
                category === window.location.pathname ? (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={article.attributes.image.data && article.attributes.image.data.attributes.url} />
                      <Card.Body>
                        <Card.Title>{article.attributes.name}</Card.Title>
                        <Card.Text>
                          {article.attributes.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ) : (
                  article.attributes.univer.data ? (
                    Univers = "/" + article.attributes.univer.data.attributes.name.toLowerCase(),
                    Univers === window.location.pathname ? (
                      <Col>
                        <Card>
                          <Card.Img variant="top" src={article.attributes.image.data && article.attributes.image.data} />
                          <Card.Body>
                            <Card.Title>{article.attributes.name}</Card.Title>
                            <Card.Text>
                              {article.attributes.description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ) : (
                      "non"
                    )
                  ) : (
                    "non"
                  )
                )
              )
                : (
                  "non"
                )

            )}
          </Row></Col>
        </Row>
      </Container>
    </>
  );
}

export default Dofus;