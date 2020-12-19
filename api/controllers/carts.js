const Product = require('../models/products');
const User = require('../models/user');
const CartItem = require('../models/cart');


exports.index = async (req, res, next) => {
    try {
      const items = await CartItem.find();
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  };


exports.create = async (req, res, next) => {
try {
    const { productId, productName, price, quantity } = req.body;
    const item = await CartItem.create({
    productId: productId,
    name: productName,
    price: price,
    quantity: quantity
    });

    res.status(200).json({ message: "The item was successfully added to the cart", cartItem: item });
} catch (error) {
    next(error);
}
};

exports.update = async (req, res, next) => {
    try {
      const { _id, quantity } = req.body;

      const item = await CartItem.findOneAndUpdate({ _id: _id }, {
        quantity: quantity
      });
  
      res.status(200).json({ message: "The cart was successfully updated.", cartItem: item });
    } catch (error) {
      next(error);
    }
  };

  exports.destroy = async (req, res, next) => {
    try {
      const { _id } = req.body;
      await CartItem.findOneAndDelete({ _id: _id });
  
      res.status(200).json({ message: "The item was deleted successfully from your cart" });
    } catch (error) {
      next(error);
    }
  };
  
