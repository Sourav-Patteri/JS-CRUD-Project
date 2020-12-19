import Axios from 'axios';
import React, { useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const New = (inputs) => {
//  const { id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);
  // const [product, setProduct] = useState({});

  
// useEffect(() => {
//   Axios.get(`${globalStore.REACT_APP_ENDPOINT}/products/${id}`)
//   .then(({ data }) => {
//       setProduct(data);
//   })
//   .catch(error => {
//     setNotification({
//       type: "danger",
//       message: `There was an error retrieving the product: ${error.message}`
//     });
//   })
// }, [globalStore, id, setNotification]);

  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/cart`, {
        ...inputs})
    .then(() => {
      setNotification({
        type: "success",
        message: "The product was successfully added to the cart."
      });
    })
    .catch(error => {
      setNotification(`The item could not be added due to an error: ${error.message}`);
    });
  }, [globalStore, inputs, setNotification]);

  return <Redirect to="../cart"/>;
}
 
export default New;