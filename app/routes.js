var Todo = require('./models/todo');
var contactModel = require('./models/contact');

module.exports = function (app) {

    app.get('/api/todos', function (req, res) {

        // use mongoose to get all todos in the database
        Todo.find(function (err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            //if (err)
            //	res.send(err);
            //res.json(todos); // return all todos in JSON format

            if (err) {
                res.send(err);
            } else {
                res.json(todos);
            }
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todos) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function (err, todos) {
                if (err)
                    res.send(err);
                res.json(todos);
            });
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function (err, todos) {
                if (err)
                    res.send(err);
                res.json(todos);
            });
        });
    });


    //look at all
    app.get('/api/contact', function (req, res) {
        contactModel.find(function (err, contacts) {
            if (!err) {
                res.json(contacts);
            } else {
                console.log(err);
            }
        });
    });

    //look at one
    app.get('/api/contact/:id', function (req, res) {
        var id = req.params.id;
        if (id) {
            contactModel.findById(id, function (err, contact) {
                if (!err) {
                    if (contact) {
                        res.json({contact: contact, status: true});
                    } else {
                        res.json({status: false});
                    }
                } else {
                    console.log(err);
                }
            });
        }

    });

    //create a contact
    app.post('/api/contact', function (req, res) {

        var contact;
        contact = new contactModel({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        });
        contact.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                console.log('created');
            }
        });
    });

    //edit&update contact
    app.put('/api/contact/:id', function (req, res) {
        var id = req.params.id;
        if (id) {
            contactModel.findById(id, function (err, contact) {
                contact.name = req.body.name,
                    contact.phone = req.body.phone,
                    contact.email = req.body.email;

                contact.save(function (err) {
                    if (!err) {
                        res.json(true);
                    } else {
                        res.json(false);
                        console.log(err);
                    }
                });
            });
        }
    });

    app.delete('/api/contact/:id', function (req, res) {
        var id = req.params.id;
        if (id) {
            contactModel.findById(id, function (err, contact) {
                contact.remove(function (err) {
                    if (!err) {
                        res.json(true);
                    } else {
                        res.json(false);
                        console.log(err);
                    }
                });
            });
        }
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};