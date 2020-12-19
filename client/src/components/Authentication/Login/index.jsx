import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Header title="User Login">
        <p>
          Login to access all the features.
        </p>
      </Header>
      
      <Container>
        
        <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;