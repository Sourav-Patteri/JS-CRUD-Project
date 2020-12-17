const Product = require('../models/products');
const User = require('../models/user');

exports.index = async (req, res, next) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };
  
  exports.show = async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
  
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
  
  exports.create = async (req, res, next) => {
    try {
      const { productName, description, price, seller } = req.body;
  
      const user = await User.findById(req.user._id);
  
      const prdct = await Product.create({
        productName: productName,
        description: description,
        price: price,
        seller: user.name
      });
  
      res.status(200).json({ message: "The product was added successfully", product: prdct });
    } catch (error) {
      next(error);
    }
  };
  
  exports.update = async (req, res, next) => {
    try {
      const { _id, productName, description, price } = req.body;

      const prdct = await Product.findOneAndUpdate({ _id: _id }, {
        productName: productName,
        description: description,
        price: price
      });
  
      res.status(200).json({ message: "The product was updated successfully", product: prdct });
    } catch (error) {
      next(error);
    }
  };
  
  exports.destroy = async (req, res, next) => {
    try {
      const { _id } = req.body;
      await Product.findOneAndDelete({ _id: _id });
  
      res.status(200).json({ message: "The product was deleted successfully" });
    } catch (error) {
      next(error);
    }
  };