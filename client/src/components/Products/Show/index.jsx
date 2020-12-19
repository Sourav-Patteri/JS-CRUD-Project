import React, { useEffect, useState, useContext } from 'react';
import Header from '../../shared/Header';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals'
import { NotificationContext } from '../../shared/Notifications'

const Show = () => {
    const { id } = useParams();
    const { globalStore } = useContext(GlobalStoreContext);
    const { setNotification } = useContext(NotificationContext);
    const [products, setProducts] = useState({});
  /*  const [inputs, setInputs] = useState({});

    const handleSubmit = event => {
      event.persist();
      setInputs({
        productId: products._id,
        name: products.name,
        price: products.price,
        quantity: 1
      })
    }*/
    
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
<Header title="Product Info">

</Header>
<Container>
    <Card bg='primary' text='white' style={{ width: '18rem' }} className="mb-2">
    <Card.Header>Product</Card.Header>
    <Card.Body>
      <Card.Title> {products.productName} </Card.Title>
      <Card.Text>
        {products.description}
        <br/>
        <br/>
        Price - {products.price}
        <br/>
        <br/>
        <Link to={`../../cart/new`}>
        <Button variant="success">Add to cart</Button>
        </Link>
      </Card.Text>
    </Card.Body>

    </Card>
</Container>
</>
 );

}
 
export default Show;