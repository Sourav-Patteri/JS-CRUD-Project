import React, { useEffect, useState, useContext } from 'react';
import Header from '../../shared/Header';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals'
import { NotificationContext } from '../../shared/Notifications'


const Show = () => {
    const { id } = useParams();
    const { globalStore } = useContext(GlobalStoreContext);
    const { setNotification } = useContext(NotificationContext);
    const [products, setProducts] = useState({});

    useEffect(() => {
        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/products/${id}`)
        .then(({ data }) => {
            setProducts(data);
        })
        .catch(error => {
          setNotification({
            type: "danger",
            message: `There was an error retrieving the product: ${error.message}`
          });
        })
      }, [globalStore, id, setNotification]);

 return (
<>
<Header title="View product">

</Header>
<Container>
    <Card bg='primary' text='white' style={{ width: '18rem' }} className="mb-2">
    <Card.Header>Product</Card.Header>
    <Card.Body>
      <Card.Title> {products.productName} </Card.Title>
      <Card.Text>
        {products.description}
        <p>
            
        </p>
        Price - {products.price}
        <p>
            
        </p>
        <Button variant="success">Add to cart</Button>
      </Card.Text>
    </Card.Body>

    </Card>
</Container>
</>
 );

}
 
export default Show;