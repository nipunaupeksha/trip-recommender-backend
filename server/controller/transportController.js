const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const config = require('../../config.json');
const dbConfig = require('../../mysql_connection');

exports.addTransport = function (req, res, next) {
    let transportType = req.body.transportType;
    let transportName = req.body.transportName;
    let address = req.body.address;
    let phone = req.body.phone;
    let email = req.body.email;
    let userId = req.body.userId;
    let query_ = "INSERT INTO transport(transportType, transportName, address, phone, email,userId) values(?,?,?,?,?,?)";
    dbConfig.query(query_, [transportType, transportName, address, phone, email,userId], (err, rows) => {
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

exports.getTransportList = function (req, res, next) {
    let userId = req.body.userId;
    let query_ = "SELECT * from transport where userId = ?";
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

exports.getTransportById = function (req, res, next) {
    let transportId = req.body.transportId;
    let query_ = "SELECT * from transport where transportId = ?";
    dbConfig.query(query_, [transportId], (err, rows) => {
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

exports.addVehicle = function (req, res, next) {
    let licensePlate = req.body.licensePlate;
    let model = req.body.model;
    let brand = req.body.brand;
    let noOfSeats = req.body.noOfSeats;
    let ac = req.body.ac;
    let cdplayer = req.body.cdplayer;
    let usb = req.body.usb;
    let availability = req.body.availability;
    let transportId = req.body.transportId;
    let query_ = "INSERT INTO vehicle(licensePlate,model,brand,noOfSeats,ac,cdplayer,usb,availability,transportId) values(?,?,?,?,?,?,?,?,?,?)";
    dbConfig.query(query_, [licensePlate,model,brand,noOfSeats,ac,cdplayer,usb,availability,transportId], (err, rows) => {
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

exports.updateVehicle = function (req, res, next) {
    let licensePlate = req.body.licensePlate;
    let model = req.body.model;
    let brand = req.body.brand;
    let noOfSeats = req.body.noOfSeats;
    let ac = req.body.ac;
    let cdplayer = req.body.cdplayer;
    let usb = req.body.usb;
    let availability = req.body.availability;
    let transportId = req.body.transportId;
    let vehicleId = req.body.vehicleId;
    let query_ = "UPDATE vehicle set licensePlate=?,model=?,brand=?,noOfSeats=?,ac=?,cdplayer=?,usb=?,availability=?,transportId=? where vehicleId=?";
    dbConfig.query(query_, [licensePlate,model,brand,noOfSeats,ac,cdplayer,usb,availability,transportId,vehicleId], (err, rows) => {
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

exports.addDriver = function (req, res, next) {
    let driverName = req.body.driverName;
    let license = req.body.license;
    let phone = req.body.phone;
    let email = req.body.email;
    let transportId = req.body.transportId;
    let query_ = "INSERT INTO driver(driverName, license, phone, email, transportId) values(?,?,?,?,?)";
    dbConfig.query(query_, [driverName, license, phone, email, transportId], (err, rows) => {
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

exports.updateDriver = function (req, res, next) {
    let driverName = req.body.driverName;
    let license = req.body.license;
    let phone = req.body.phone;
    let email = req.body.email;
    let transportId = req.body.transportId;
    let driverId = req.body.driverId;
    let query_ = "UPDATE driver set driverName=?,license=?,phone=?,email=?,transportId=? where driverId=?";
    dbConfig.query(query_, [driverName,license,phone,email,transportId,driverId], (err, rows) => {
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