import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
  const { id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/cart/destroy`, { _id: id })
    .then(() => {
      setNotification({
        type: "success",
        message: "The product was successfully removed from the cart."
      });
    })
    .catch(error => {
      setNotification(`The item could not be removed due to an error: ${error.message}`);
    });
  }, []);

  return <Redirect to="/cart"/>;
}
 
export default Destroy;