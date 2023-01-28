const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    imageUrl: {
        required:true,
        type:String
    },
    oldPrice:{
        required:false,
        type:Number
    },
    thereIsDiscount:{
        required:true,
        type:Boolean
    },
    discount:{
        required:false,
        type:Number
    },
    linkToProductPage:{
        required:true,
        type:String
    },
    newPrice:{
        required:true,
        type:Number
    },
    exibitionType:{
        required:true,
        type:String
    }
})

const Product = mongoose.model('Product',productSchema)

module.exports = Product