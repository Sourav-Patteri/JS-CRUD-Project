import React, { useEffect, useState, useContext } from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals'
import { NotificationContext } from '../../shared/Notifications'

const Edit = () => {
  const { id } = useParams();
  const [preload, setPreload] = useState({});
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/products/${id}`)
    .then(({ data }) => {
      setPreload(data);
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
      <Header title="Edit Product">
          Update the product listing.
      </Header>

      <Container>
        <Form endpoint="products/update" preload={preload}/>
      </Container>
    </>
  );
}
 
export default Edit;