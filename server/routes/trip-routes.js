const express =require('express');
const router = express.Router();
const tripController = require('../controller/tripController');


router.get('/getDestinationList', tripController.getDestinationList);
router.get('/getAgeList', tripController.getAgeList);
router.get('/getTravelList', tripController.getTravelList);

router.post('/createTrip', tripController.createTrip);
router.post('/getTrips', tripController.getTrips);
router.post('/getTripsById', tripController.getTripsById);
router.post('/getRecommendedTrips', tripController.getRecommendedTrips);


module.exports = router;