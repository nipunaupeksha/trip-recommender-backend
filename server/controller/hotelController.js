const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const config = require('../../config.json');
const dbConfig = require('../../mysql_connection');

exports.addHotel = function (req, res, next) {
    let hotelName = req.body.hotelName;
    let address = req.body.address;
    let phone = req.body.phone;
    let email = req.body.email;
    let userId = req.body.userId;
    let query_ = "INSERT INTO hotel(hotelName, address, phone, email,userId) values(?,?,?,?,?)";
    dbConfig.query(query_, [hotelName, address, phone, email, userId], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server");
            console.log(err);
            return res.status(401).send({ success: false, message: "Error connecting to server!" });
        } else {
            res.status(200).send({ success: true, data: { message: "Trip successfully created" } });
        }
    });
};

exports.getHotelList = function (req, res, next) {
    let userId = req.body.userId;
    let query_ = "SELECT * from hotel where userId = ?";
    dbConfig.query(query_, [userId], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server !");
            return res.status(404).send({ success: false, message: "Error Connecting to Server!" });
        } else {
            if (rows.length != 0) {
                res.status(200).send({ success: true, data: rows });
            }
        }
    });
};

exports.getRoomList = function (req, res, next) {
    let userId = req.body.userId;
    let query_ = "SELECT * from roomtype";
    dbConfig.query(query_, (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server !");
            return res.status(404).send({ success: false, message: "Error Connecting to Server!" });
        } else {
            if (rows.length != 0) {
                res.status(200).send({ success: true, data: rows });
            }
        }
    });
};

exports.getHotelDetails = function (req, res, next) {
    let hotelId = req.body.hotelId;
    let query_ = "SELECT * from hoteldetails where hotelId = ?";
    dbConfig.query(query_, [hotelId], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server !");
            return res.status(404).send({ success: false, message: "Error Connecting to Server!" });
        } else {
            if (rows.length != 0) {
                res.status(200).send({ success: true, data: rows });
            }
        }
    });
};

exports.getHotelById = function (req, res, next) {
    let hotelId = req.body.hotelId;
    let query_ = "SELECT * from hotel where hotelId = ?";
    dbConfig.query(query_, [hotelId], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server !");
            return res.status(404).send({ success: false, message: "Error Connecting to Server!" });
        } else {
            if (rows.length != 0) {
                res.status(200).send({ success: true, data: rows });
            }
        }
    });
};

exports.updateHotel= function (req, res, next) {
    let luxury=req.body.luxury; 
    let semiluxury=req.body.semiluxury; 
    let deluxe=req.body.deluxe;
    let suite=req.body.suite;
    let luxac=req.body.luxac; 
    let semiluxac=req.body.semiluxac; 
    let deluxeac=req.body.deluxeac; 
    let suiteac=req.body.suiteac; 
    let adults=req.body.adults; 
    let kids=req.body.kids; 
    let price=req.body.price; 
    let hotelId=req.body.hotelId;
    let query_ = "UPDATE hoteldetails set noOfAdults=?,noOfKids=?,price=?,luxury=?,semiluxury=?,deluxe=?,suite=?,luxuryac=?,semiluxuryac=?,deluxeac=?,suiteac=? where hotelId=?";
    dbConfig.query(query_, [adults,kids,price,luxury,semiluxury,deluxe,suite,luxac,semiluxac,deluxeac,suiteac,hotelId], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server");
            console.log(err);
            return res.status(401).send({ success: false, message: "Error connecting to server!" });
        } else {
            res.status(200).send({ success: true, data: { message: "Trip successfully created" } });
            //console.log(address);
        }
    });
};

exports.addHotelDetails= function (req, res, next) {
    let luxury=req.body.luxury; 
    let semiluxury=req.body.semiluxury; 
    let deluxe=req.body.deluxe;
    let suite=req.body.suite;
    let luxac=req.body.luxac; 
    let semiluxac=req.body.semiluxac; 
    let deluxeac=req.body.deluxeac; 
    let suiteac=req.body.suiteac; 
    let adults=req.body.adults; 
    let kids=req.body.kids; 
    let price=req.body.price; 
    let hotelId=req.body.hotelId;
    let query_ = "INSERT into hoteldetails (noOfAdults,noOfKids,price,luxury,semiluxury,deluxe,suite,luxuryac,semiluxuryac,deluxeac,suiteac,hotelId)values(?,?,?,?,?,?,?,?,?,?,?,?)";
    dbConfig.query(query_, [adults,kids,price,luxury,semiluxury,deluxe,suite,luxac,semiluxac,deluxeac,suiteac,hotelId], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server");
            console.log(err);
            return res.status(401).send({ success: false, message: "Error connecting to server!" });
        } else {
            res.status(200).send({ success: true, data: { message: "Trip successfully created" } });
            //console.log(address);
        }
    });
};
