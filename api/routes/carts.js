const { index, create, update, destroy } = require('../controllers/carts');
  
  module.exports = router => {
    // localhost:4000/cart
    router.get('/cart', index);
    
    // localhost:4000/products
    router.post('/cart', create);
  
    // localhost:4000/products/update
    router.post('/cart/update', update);
  
    // localhost:4000/products/destroy
    router.post('/cart/destroy', destroy);
  };
  