import React from 'react';
import {Container, Carousel} from 'react-bootstrap';
import Header from '../../shared/Header';
import Camera from '../../shared/Assets/camera.jpg'
import Laptop from '../../shared/Assets/laptop.png'
import Technology from '../../shared/Assets/technology.jpg'

const Home = () => {
  return (
    <>
      <Header title="Escia">
        <p>Make your life better with our products.</p>
      </Header>

      <Container>
        <Container>
        <Carousel>
          <Carousel.Item>
            <img
              
              className="d-block w-100"
              src={Camera}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Buy Cameras</h3>
              <p>DSLR's, Mirorless, etc..</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Laptop}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Buy Laptops</h3>
              <p>MacBooks, Dell, HP, etc.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Technology}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Buy Phones and accessories</h3>
              <p>iPhones, samsung phones, etc. and their accessories</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Container>
      </Container>
    </>
  );
};

export default Home;