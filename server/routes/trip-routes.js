const express =require('express');
const router = express.Router();
const tripController = require('../controller/tripController');


router.get('/getDestinationList', tripController.getDestinationList);
router.get('/getAgeList', tripController.getAgeList);
router.get('/getTravelList', tripController.getTravelList);

router.post('/createTrip', tripController.createTrip);
router.post('/joinTrip', tripController.joinTrip);
router.post('/getTrips', tripController.getTrips);
router.post('/getJoinedTrips', tripController.getJoinedTrips);
router.post('/getTripsById', tripController.getTripsById);
router.post('/getRecommendedTrips', tripController.getRecommendedTrips);
router.post('/deleteCreatedTrip', tripController.deleteCreatedTrip);
router.post('/deleteJoinedTrip', tripController.deleteJoinedTrip);
router.post('/deleteVehicle', tripController.deleteVehicle);

module.exports = router;