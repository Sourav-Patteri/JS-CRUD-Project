import Header from '../shared/Header';
import { Container, Table } from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { setNotification } = useContext(NotificationContext);
    const { globalStore } = useContext(GlobalStoreContext);

    const [cartItems, setCartItems] = useState([]);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!globalStore.REACT_APP_ENDPOINT) return;

        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/cart`)
        .then(({ data }) => {
            setCartItems(data);
        })
        .catch(error => {
          setNotification({
            type: "danger",
            message: `There was an error retrieving the cart: ${error.message}`
          });
        });

        // console.log(cartItems);

       /* Axios.get(`${globalStore.REACT_APP_ENDPOINT}/products/${}`)
        .then(({ data })=>{setProducts(data);}).catch(error => {
            setNotification({
            type: "danger",
            message: `There was an error retrieving the product: ${error.message}`
          });
        });*/

      }, [globalStore, cartItems, setNotification]);


    return(
        <>
        <Header title="Cart"/>

        <Container>
        {cartItems && cartItems.length > 0 ? (
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cartItem, i) => (
                    <tr key={i}>
                      <td>
                        {cartItem.name}
                      </td>

                      <td>
                        {cartItem.price}
                      </td>

                      <td>
                        {cartItem.quantity}
                      </td>                  
                      <td>
                      {/* <Link to={`products/show/${cartItem.productId}`}>
                          view
                        </Link> */}
                        {/* &nbsp;|&nbsp; */}
                        <Link to={`cart/destroy/${cartItem._id}`}>
                          delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </Table>
          ) : null}
        </Container>
        </>
        )
};
export default Cart;