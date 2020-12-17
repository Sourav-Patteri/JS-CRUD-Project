const { index, show, create, update, destroy } = require('../controllers/products');
const passport = require('passport');
  
  module.exports = router => {
    // localhost:4000/products
    router.get('/products', index);
  
    // localhost:4000/products/12345
    router.get('/products/:id', show);
  
    // localhost:4000/products
    router.post('/products', passport.authenticate('jwt', { session: false }), create);
  
    // localhost:4000/products/update
    router.post('/products/update', passport.authenticate('jwt', { session: false }), update);
  
    // localhost:4000/products/destroy
    router.post('/products/destroy', passport.authenticate('jwt', { session: false }), destroy);
  };
  