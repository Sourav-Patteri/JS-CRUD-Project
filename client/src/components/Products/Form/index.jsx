import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';


const ProductForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
      ...inputs,
      secret_token: (user && user.token)
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: "The product was updated successfully"
        });
      }

      setRedirect(true);
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: `There was an error updating the product: ${error.message}`
      });
    });
  };

  if (redirect) return <Redirect to="/products"/>;

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group>
        <Form.Label>Product Name</Form.Label>
        <Form.Control 
          onChange={handleChange} 
          name="productName" 
          placeholder="Enter product name"
          defaultValue={inputs.productName}
        />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Desciption</Form.Label>
        <Form.Control 
          onChange={handleChange} 
          name="description" 
          placeholder="Enter product description"
          defaultValue={inputs.description}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Price </Form.Label>
        <Form.Control 
          onChange={handleChange}
          type="number" 
          name="price" 
          placeholder="Enter product price(format - 0.00)"
          defaultValue={inputs.price}
          min={0.01}
          step={0.01}
        />
      </Form.Group>

      <Form.Group>
      <Button type="submit">{endpoint === "products" ? "Add Product": "Update Product"}</Button>
      </Form.Group>
    </Form>
  );
}
 
export default ProductForm;