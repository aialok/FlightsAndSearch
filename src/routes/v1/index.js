const express=require('express');
const CityController=require('../../controllers/city-controller');
const AirportController= require("../../controllers/airport-controller");
const FlightController= require("../../controllers/flight-controller");

const router=express.Router();

//City Routes

router.post('/city/', CityController.create);
router.get('/city/:id', CityController.get);
router.delete('/city/:id', CityController.destroy);
router.get('/city/', CityController.getAllCities);
router.patch('/city/:id',CityController.update);
router.post('/city/bulk', CityController.createManyCities);

// Airport Routes

router.post('/airport/', AirportController.create);
router.get('/airport/:id', AirportController.get);
router.get('/airport/', AirportController.getAllAirport);
router.delete('/airport/:id', AirportController.destroy);
router.patch("/airport/:id", AirportController.update);

// Flight Routes

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);




module.exports=router;




