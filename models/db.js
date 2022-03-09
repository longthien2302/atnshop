var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;
var URI = 'mongodb+srv://ngoc:ngoc@cluster0.bssl1.mongodb.net/ATNShop?retryWrites=true&w=majority'
var connect = require('mongoose').connect;
connect(URI, {useNewUrlParser: true});

const ProductSchema = new Schema({
    _id:String,
    ID: String,
    Product: String,
    Price: String,
    Description: String,
    img: String
});

const Product = Model('Product', ProductSchema, 'product');

module.exports.Product = Product;