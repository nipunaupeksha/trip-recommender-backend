const express = require('express');
const router = express.Router();
const transportController = require('../controller/transportController');

router.post('/addTransport', transportController.addTransport);
router.post('/getTransportList',transportController.getTransportList);
router.post('/getTransportById', transportController.getTransportById);

router.post('/addVehicle', transportController.addVehicle);
router.post('/updateVehicle',transportController.updateVehicle);
router.post('/getVehicleDetails',transportController.getVehicleDetails);

router.post('/addDriver',transportController.addDriver);
router.post('/updateDriver', transportController.updateDriver);
router.post('/getDriverDetails', transportController.getDriverDetails);

router.post('/getTransportDetails', transportController.getTransportDetails);

router.post('/checkValidityOfVehicle',transportController.checkValidityOfVehicle);
router.post('/checkValidityOfDriver',transportController.checkValidityOfDriver);

module.exports = router;