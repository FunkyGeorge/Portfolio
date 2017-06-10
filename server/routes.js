var Promise = require("bluebird");
var using = Promise.using;
var getConnection = require("./mysql");

var guests = {
    list: function(req, res){
        console.log('reached');
        using(getConnection(), connection => {
            var query = "SELECT name, adults, children " +
            "FROM guests ORDER BY created_at";
            return connection.execute(query);
        })
        .spread(data => {
            res.json({list: data});
        })
        .catch(err => {
            console.log(err);
            res.json({error: 'Could not get list correctly'});
        });
    },
    rsvp: function(req, res){
        using(getConnection(), connection => {
            var query = "INSERT INTO guests (name, adults, children, created_at) " +
            " VALUES (?, ?, ?, NOW())";

            return connection.execute(query, [req.body.name, req.body.adults, req.body.children]);
        })
        .spread(data => {
            res.json({result: true});
        })
        .catch(err => {
            console.log(err);
            res.json({error: 'Could not RSVP'});
        });
    }
};

module.exports = function(app) {
    app.get('/list', guests.list);
    app.post('/rsvp', guests.rsvp);
};