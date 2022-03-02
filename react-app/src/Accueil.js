import React, { Component } from 'react';
import {Carousel, Col, Container} from 'react-bootstrap'
import NavSite from './Navbar';

class Accueil extends Component {

    render() {
    return (
      <>
      <NavSite/>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="http://localhost:1337/uploads/992x595_Carrousel_mobile_Muta_8a06328523.jpg?updated_at=2022-03-02T17:13:07.894Z"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="http://localhost:1337/uploads/992x595_FR_Carrousel_Tapis_IOP_Retro_min_ad6a10594d.jpg?updated_at=2022-03-02T17:13:07.875Z"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="http://localhost:1337/uploads/Carrousel_responsive_Peluche_Tofu_Royal_FR_c433cfc89c.jpg?updated_at=2022-03-02T17:13:07.874Z"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Accueil;