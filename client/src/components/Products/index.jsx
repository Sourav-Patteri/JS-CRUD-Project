import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const { setNotification } = useContext(NotificationContext);
    const { globalStore } = useContext(GlobalStoreContext);
    const { user } = useContext(UserContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!globalStore.REACT_APP_ENDPOINT) return;

        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/products`)
        .then(({ data }) => {
            setProducts(data);
        })
        .catch(error => {
          setNotification({
            type: "danger",
            message: `There was an error retrieving the products: ${error.message}`
          });
        });
      }, [globalStore, setNotification]);

      return (
        <>
          <Header title="Products"/>
    
          <Container>
            {products && products.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  {user && user.token ? (<th>Options</th>) : null}
                  </tr>
                </thead>
    
                <tbody>
                  {products.map((product, i) => (
                    <tr key={i}>
                      <td>
                        {product.productName}
                      </td>
                      
                      <td>
                        {product.description}
                      </td>
    
                      <td>
                        {product.price}
                      </td>
                      {user && user.token ? (
                      <>

                      <td>
                         <Link to={`products/show/${product._id}`}>
                         view
                       </Link>
                       &nbsp;|&nbsp;
                       <Link to={`products/edit/${product._id}`}>
                         edit
                       </Link>
                       &nbsp;|&nbsp;
                       <Link to={`products/destroy/${product._id}`}>
                         delete
                       </Link>                      
                      </td>
                      </>
                       ) : null }
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : null}
          </Container>
        </>
      );

}
 
export default Products;