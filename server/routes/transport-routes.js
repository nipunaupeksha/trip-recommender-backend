const express = require('express');
const router = express.Router();
const transportController = require('../controller/transportController');

router.post('/addTransport', transportController.addTransport);
router.post('/getTransportList',transportController.getTransportList);
router.post('/getTransportById', transportController.getTransportById);

router.post('/addVehicle', transportController.addVehicle);
router.post('/updateVehicle',transportController.updateVehicle);

module.exports = router;