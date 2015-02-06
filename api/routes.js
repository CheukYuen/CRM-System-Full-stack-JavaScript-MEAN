
var contactModel = require('./models/contact');

module.exports = function (app) {


    //look at all
    app.get('/api/contact', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
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
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
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
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");

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
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        var id = req.params.id;
        if (id) {
            contactModel.findById(id, function (err, contact) {
                console.log(JSON.stringify(contact, null, 2));

                contact.name = req.body.name;
                contact.phone = req.body.phone;
                contact.email = req.body.email;

                //contact.orders = req.body.orders; // req.body.orders;
                contact.shoppingCart = req.body.shoppingCart;
                contact.orders.order = req.body.orders.order;
                console.log(JSON.stringify(contact, null, 2));
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
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
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
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};