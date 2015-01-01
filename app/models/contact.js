var mongoose = require('mongoose');

var schema = mongoose.Schema;

var orderProductSchema = new schema({
    name: {type: String, required: true},
    price: {type: Number},
    count: {type: Number},
    objectId:{type: String, required: true}
});

var shoppingCartProductSchema = new schema({
    name: {type: String, required: true},
    price: {type: Number},
    count: {type: Number},
    objectId:{type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

var orderListSchema = new schema({
    order: [orderProductSchema],
    createdAt: {type: Date, default: Date.now}
});


//var contactSchema = new schema({
//    name: {type: String, required: true},
//    phone: {type: String},
//    email: {type: String},
//    orders: [{
//        name:{type: String, required: true},
//        price:{type: Number},
//        count:{type:Number}
//    }]
//});


var contactSchema = new schema({
    name: {type: String, required: true},
    phone: {type: String},
    email: {type: String},
    orders: [orderListSchema],
    shoppingCart: [shoppingCartProductSchema]

});

module.exports = mongoose.model('contact', contactSchema);