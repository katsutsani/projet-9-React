import React, { Component } from 'react';
import { Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Link, renderMatches } from 'react-router-dom';
import NavSite from './Navbar';

class Dofus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      universUrl: null,
      categoryUrl: null,
      sub_categoryUrl: null,
      isUnivers: null,
      isCategory: null,
    }
  }
  async componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const sub_category = queryParams.get('sub-category');
    const category = queryParams.get('category');
    const Univers = queryParams.get('univers');
    this.setState({ universUrl: Univers, categoryUrl: category, sub_categoryUrl: sub_category })
  }
  render() {
    return (
      <>
        <NavSite />
        <nav class="panel">
          <h2 class="text-center">Catégories</h2>
          <Dropdown className="text-center">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown_search text-black">
              choisir une Catégorie
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.props.categories && this.props.categories.map((category) =>
                category.attributes.name === window.location.href.substring(window.location.href.lastIndexOf('/') + 1) || this.state.isCategory === "Yes" ? (
                  this.state.isCategory === "Yes" ? (
                    <Dropdown.Item className="text-center"><Link to={"/" + category.attributes.name.toLowerCase()} onClick={() => this.setState({ universUrl: null, sub_categoryUrl: null })}>{category.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center"><Link to={"/" + category.attributes.name.toLowerCase()} onClick={() => this.setState({ universUrl: null, sub_categoryUrl: null })}>{category.attributes.name}</Link></Dropdown.Item>,
                    this.setState({ isCategory: "Yes" })
                  )
                ) : (
                  this.state.sub_categoryUrl != null ? (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?category=" + category.attributes.name.toLowerCase() + "?sub-category=" + this.state.sub_categoryUrl} onClick={() => this.setState({ categoryUrl: category.attributes.name.toLowerCase() })}>{category.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?category=" + category.attributes.name.toLowerCase()} onClick={() => this.setState({ categoryUrl: category.attributes.name.toLowerCase() })}>{category.attributes.name}</Link></Dropdown.Item>
                  )

                )
              )}
            </Dropdown.Menu>
          </Dropdown>
          <h2 class="text-center">Sous-catégories</h2>
          <Dropdown className="text-center">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown_search text-black">
              choisir une Sous-catégorie
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.props.sub_categories && this.props.sub_categories.map((sub_category) =>
                this.state.categoryUrl != null ? (
                  <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?category=" + this.state.categoryUrl + "?sub-category=" + sub_category.attributes.name.toLowerCase()} onClick={() => this.setState({ sub_categoryUrl: sub_category.attributes.name.toLowerCase() })}>{sub_category.attributes.name}</Link></Dropdown.Item>
                ) : (
                  this.state.universUrl != null ? (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?univers=" + this.state.universUrl + "?sub-category=" + sub_category.attributes.name.toLowerCase()} onClick={() => this.setState({ sub_categoryUrl: sub_category.attributes.name.toLowerCase() })}>{sub_category.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center" > <Link to={window.location.pathname + "?sub-category=" + sub_category.attributes.name.toLowerCase()} onClick={() => this.setState({ sub_categoryUrl: sub_category.attributes.name.toLowerCase() })}>{sub_category.attributes.name}</Link></Dropdown.Item>
                  )
                )
              )}
            </Dropdown.Menu>
          </Dropdown>
          <h2 class="text-center">Univers</h2>
          <Dropdown className="text-center">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown_search text-black">
              choisir un Univers
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.props.Universs && this.props.Universs.map((Univers) =>
                Univers.attributes.name.toLowerCase() === window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) || this.state.isUnivers === "Yes" ? (
                  this.state.isUnivers === "Yes" ? (
                    <Dropdown.Item className="text-center"><Link to={"/" + Univers.attributes.name.toLowerCase()} onClick={() => this.setState({ categoryUrl: null, sub_categoryUrl: null })}>{Univers.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center"><Link to={"/" + Univers.attributes.name.toLowerCase()} onClick={() => this.setState({ categoryUrl: null, sub_categoryUrl: null })}>{Univers.attributes.name}</Link></Dropdown.Item>,
                    this.setState({ isUnivers: "Yes" })
                  )
                ) : (
                  this.state.sub_categoryUrl != null ? (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?univers=" + Univers.attributes.name.toLowerCase() + "?sub-category=" + this.state.sub_categoryUrl} onClick={() => this.setState({ universUrl: Univers.attributes.name.toLowerCase() })}>{Univers.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?univers=" + Univers.attributes.name.toLowerCase()} onClick={() => this.setState({ universUrl: Univers.attributes.name.toLowerCase() })}>{Univers.attributes.name}</Link></Dropdown.Item>
                  )

                )
              )}
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        <Container className="contain_article">
          <Row>
            <Col className="around_articles" xs={{ offset: 5 }}><Row xs={1} md={1} className="g-4">
              {console.log(window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1))}
              {this.props.articles && this.props.articles.map((article) =>
                article.attributes.category.data && article.attributes.category.data.attributes.name.toLowerCase() === window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) ? (
                  <Col>
                    <Card>
                      {article.attributes.image.data ? (
                        <Card.Img variant="top" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                      ):""}
                      <Card.Body>
                        <Card.Title>{article.attributes.name}</Card.Title>
                        <Card.Text>
                          {article.attributes.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ) : (
                  article.attributes.univer.data && article.attributes.univer.data.attributes.name.toLowerCase() === window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) ? (
                    <Col>
                      <Card>
                        {console.log(article.attributes.image.data && article.attributes.image.data[0].attributes)}
                        {article.attributes.image.data ? (
                          <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                        ) : (
                          ""
                        )}
                      
                        <Card.Body>
                          <Card.Title className='titleCard'>{article.attributes.name}</Card.Title>
                          <Card.Text className='descCard'>
                            {article.attributes.description}
                          </Card.Text>
                          <Button className="viewButton">View</Button>
                          <Button className="BtnAddCart" onClick={()=>this.props.addToCart(article.attributes)}>Ajouter au Panier</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ) : (
                    ""
                  )
                )
              )}
            </Row></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Dofus;