const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
}

function index(req, res){
    Flight.find({}, function(err, flight) {
        res.render('flights/index', {title: 'All Flights', flights});
    });
}

function newFlight(req, res){

    res.render('flights/new')
}

function create(req, res){
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('movies/new');
        res.redirect('/flights');
    });
}