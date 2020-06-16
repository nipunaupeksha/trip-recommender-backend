const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelController');

router.post('/addHotel', hotelController.addHotel);
router.post('/getHotelList', hotelController.getHotelList);
router.get('/getRoomList',hotelController.getRoomList);
router.post('/getHotelDetails',hotelController.getHotelDetails);
router.post('/getHotelById',hotelController.getHotelById);

module.exports = router;