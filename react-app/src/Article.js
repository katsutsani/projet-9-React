import React, { Component } from 'react';
import { Button, ButtonGroup, Col, Container, Dropdown, Row } from 'react-bootstrap'
import NavSite from './Navbar';
import FooterPage from './Footer';
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillCreditCard, AiFillTwitterCircle, AiOutlineRollback, AiOutlineShopping } from "react-icons/ai";
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

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: []
        }
    }

    async UNSAFE_componentWillReceiveProps(){
        const showArticles = this.props.articles.filter((article, key) => article.id == window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
        this.setState({
            article: showArticles
        }, () => console.log(this.state.article))
      }
    async componentDidMount() {
        const showArticles = this.props.articles.filter((article, key) => article.id == window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
        this.setState({
            article: showArticles
        }, () => console.log(this.state.article))

    }

    render() {

        return (
            <>
                <NavSite panier={this.props.panier} />

                {this.state.article[0] ? (
                    <>
                        <Container>
                            <Row>
                                <h2 className="text-uppercase">{this.state.article[0].attributes.name}</h2>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        className="w-100"
                                        src={"http://localhost:1337" + this.state.article[0].attributes.image.data[0].attributes.url}
                                        alt="Peluche"
                                    />
                                </Col>
                                <Col>
                                    <Row className="p-3">
                                        <Col>
                                            {this.state.article[0].attributes.description}
                                        </Col>
                                    </Row>
                                    <Row className="p-3">
                                        <Col className="d-flex align-items-center">Prix : {this.state.article[0].attributes.prix} euros</Col>
                                        <Col className="d-flex justify-content-end" >
                                            <Button variant="#ffffff" className="text-uppercase" onClick={() => this.props.addToCart(this.state.article[0])}>acheter</Button>
                                        </Col>
                                    </Row>
                                    <ColoredLine color="black" />
                                    <Row className="p-2">
                                        <Col className="d-flex align-items-center">Vous aimez ce produit ? Partagez-le !</Col>
                                        <Col>
                                            <Row>
                                                <Col className="d-flex justify-content-end align-items-center">
                                                    <a
                                                        href="https://twitter.com/ankamaeditions"
                                                        target="_blank"
                                                        className="p-1">
                                                        <IconContext.Provider value={{ color: "#78C4FF", size: '47px' }}>
                                                            <div>
                                                                <AiFillTwitterCircle />
                                                            </div>
                                                        </IconContext.Provider>
                                                    </a>
                                                    <a
                                                        href="https://fr-fr.facebook.com/DOFUS"
                                                        target="_blank"
                                                        className="p-1">
                                                        <IconContext.Provider value={{ color: "#657CCD", size: '40px' }}>
                                                            <div>
                                                                <BsFacebook />
                                                            </div>
                                                        </IconContext.Provider>
                                                    </a>
                                                    <a
                                                        href="https://www.youtube.com/user/AnkamaTV"
                                                        target="_blank"
                                                        className="p-1">
                                                        <IconContext.Provider value={{ color: "#C3171D", size: '45px' }}>
                                                            <div>
                                                                <BsYoutube />
                                                            </div>
                                                        </IconContext.Provider>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <ColoredLine color="black" />
                                    <Row className="p-3">
                                        <Col>
                                            <Row>
                                                <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                                    <Col className='d-flex justify-content-center'>
                                                        <AiOutlineRollback />
                                                    </Col>
                                                </IconContext.Provider>
                                            </Row>
                                            <Row>
                                                <p class='text-center text-uppercase'>retours gratuits</p>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                                    <Col className='d-flex justify-content-center'>
                                                        <AiOutlineShopping />
                                                    </Col>
                                                </IconContext.Provider>
                                            </Row>
                                            <Row>
                                                <p class='text-center text-uppercase'>livraison en france et à l'international</p>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <IconContext.Provider value={{ color: "black", size: '40px' }}>
                                                    <Col className='d-flex justify-content-center'>
                                                        <AiFillCreditCard />
                                                    </Col>
                                                </IconContext.Provider>
                                            </Row>
                                            <Row>
                                                <p class='text-center text-uppercase'>paiement sécurisé</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                        <FooterPage />
                    </>
                ) : ("")}
            </>
        );
    }
}

export default Article;