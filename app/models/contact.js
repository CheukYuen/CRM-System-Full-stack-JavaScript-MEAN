
var mongoose = require('mongoose');

var schema = mongoose.Schema;

var contactSchema = new schema({
    name: {type: String, required: true},
    phone: {type: String},
    email: {type: String}
});
module.exports = mongoose.model('contact', contactSchema);