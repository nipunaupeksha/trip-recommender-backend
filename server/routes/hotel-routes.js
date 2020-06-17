const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelController');

router.post('/addHotel', hotelController.addHotel);
router.post('/getHotelList', hotelController.getHotelList);
router.get('/getRoomList',hotelController.getRoomList);
router.post('/getHotelDetails',hotelController.getHotelDetails);
router.post('/getHotelById',hotelController.getHotelById);
router.post('/updateHotel',hotelController.updateHotel);
router.post('/addHotelDetails',hotelController.addHotelDetails);


module.exports = router;