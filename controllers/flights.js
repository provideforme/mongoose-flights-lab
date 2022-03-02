import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight"
  }) 
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err){
    if (err) return res.render('flights/new')
    res.redirect('/flights')
  })
}

function index(req, res) {
  console.log('hi');
  Flight.find({}, function (error, flights) {
    res.render("flights/index", {
      error,
      flights,
      title: "All Flights"
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function (err, flight){
    res.redirect('/flights')
  })
}

function edit(req, res) {
  console.log("gonna update")
}

export{
  newFlight as new,
  index,
  create,
  deleteFlight as delete,
  edit
}