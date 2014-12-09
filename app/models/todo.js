var mongoose = require('mongoose');

var schema = mongoose.Schema;

var todoSchema = new schema({
    text: String,
    done: Boolean
});
module.exports = mongoose.model('Todo', todoSchema);