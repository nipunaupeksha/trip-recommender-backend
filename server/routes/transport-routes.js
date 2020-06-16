const express = require('express');
const router = express.Router();
const transportController = require('../controller/transportController');

router.post('/addTransport', transportController.addTransport);
router.post('/getTransportList',transportController.getTransportList);
router.post('/getTransportById', transportController.getTransportById);

router.post('/addVehicle', transportController.addVehicle);
router.post('/updateVehicle',transportController.updateVehicle);

router.post('/addDriver',transportController.addDriver);
router.post('/updateDriver', transportController.updateDriver);

module.exports = router;