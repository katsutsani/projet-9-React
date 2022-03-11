import React, { Component } from 'react';
import { Card, Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import NavSite from './Navbar';
import FooterPage from './Footer';
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

class Accueil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
    }
  }
  async UNSAFE_componentWillReceiveProps(){
    const showArticles = this.props.articles.filter((article, key) => article.attributes.new == true)
    this.setState({
      articles: showArticles
    }, () => console.log(this.state.articles))
  }
  async componentDidMount() {
    console.log(this.props.articles)
    const showArticles = this.props.articles.filter((article, key) => article.attributes.new == true)
    this.setState({
      articles: showArticles
    }, () => console.log(this.state.articles))
  }
  render() {   
    var img = 0
    return (
      <>
        <NavSite panier={this.props.panier} />
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
              <ColoredLine color="black" />
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
                      {console.log(this.state.articles)}
                      {this.state.articles.map((article) =>
                        article.attributes && img < 4 ? (
                          <>
                            <Col>
                              <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                <Card.Body>
                                  <Card.Title>{article.attributes.name}</Card.Title>
                                  <Card.Text>
                                    {article.attributes.description}
                                  </Card.Text>
                                  <Link to={"/article/" + article.id}><Button variant="outline-dark" className="text-uppercase">View</Button></Link>
                                </Card.Body>
                              </Card>
                            </Col>
                            {console.log(img++)}
                          </>
                        ) : ("")
                      )}
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
                      {this.state.articles.map((article) =>
                        article.attributes && img >= 4 && img < 8 ? (
                          <>
                            <Col>
                              <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                <Card.Body>
                                  <Card.Title>{article.attributes.name}</Card.Title>
                                  <Card.Text>
                                    {article.attributes.description}
                                  </Card.Text>
                                  <Link to={"/article/" + article.id}><Button variant="outline-dark" className="text-uppercase">View</Button></Link>
                                </Card.Body>
                              </Card>
                            </Col>
                            {console.log(img++)}
                          </>
                        ) : ("")
                      )}
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