import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Add a Product">
          Add a new product listing.
      </Header>

      <Container>
        <Form endpoint="products"/>
      </Container>
    </>
  );
}
 
export default New;