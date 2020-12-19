import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';
import {ReactComponent as CartImage} from './assets/cart.svg';

const NavLink = (props) => {
  // This function allows us to use React Router
  // with React Bootstrap. Booooya
    return (
    <Nav.Link
      href={props.href}
      onClick={e => {
        e.preventDefault();
        props.navigate(props.href);    
      }}
    >
      {props.children}
    </Nav.Link>
  );
};

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand>Escia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" component={NavLink}>Home</Link>
          <Link to="/products" component={NavLink}>Products</Link>
          {user && user.token ? (
            <>
              <Link to="/users" component={NavLink}>Users</Link>
              <Link to="/profile" component={NavLink}>Profile</Link>
              <Link to="/products/new" component={NavLink}>Add a product</Link> 
              <Link to="/products/cart" component={NavLink}></Link> 
              {/* <Link to="/profile/edit" component={NavLink}>Edit Profile</Link> */}
              <Link to="/logout" component={NavLink}>Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" component={NavLink}>Login</Link>
              <Link to="/register" component={NavLink}>Register</Link>
            </>
          )
          }
          </Nav>
          <Nav className="ml-auto">
          <React.Fragment>
            <Link to="/cart" component={NavLink}>
            <CartImage height="40"></CartImage>
            </Link>
          </React.Fragment>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default Navigation;