import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';


const Home = () => {
  return (
    <>
      <Header title="Escia">
        <p>
          Make your life better with our products.
        </p>
      </Header>

      <Container>
        <hr/>

        <p>
          The content is editable under <strong>/src/components/Pages/Home/index.jsx</strong>
        </p>

        <p>You home page content!</p>
        <br/> <br/>
        <img
          src={"https://via.placeholder.com/150"}
          width={200}
          height={200}
          className="mr-3"
          alt="any"
         /> 
         <img
          src={"https://via.placeholder.com/150"}
          width={200}
          height={200}
          className="mr-3"
          alt="any"
         /> 
         <img
          src={"https://via.placeholder.com/150"}
          width={200}
          height={200}
          className="mr-3"
          alt="any"
         /> 
      </Container>
    </>
  );
}
 
export default Home;