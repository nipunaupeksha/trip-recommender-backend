const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const config = require('../../config.json');
const dbConfig = require('../../mysql_connection');

exports.createTrip = function (req, res, next) {
    let tripDestinationId = req.body.tripDestinationId;
    let start_date = req.body.start_date;
    let start_time = req.body.start_time;
    let start_venue = req.body.start_venue;
    let days = req.body.days;
    let people_count = req.body.people_count;
    let participants = req.body.participants;
    let budget_per_person = req.body.budget_per_person;
    let ageId = req.body.ageId;
    let triptype = req.body.triptype;
    let travel = req.body.travel;
    let userId = req.body.userId;
    let created = req.body.created;
    let hotelId = 1;
    let transportId = 1;
    let query_ = "INSERT INTO trip(tripDestinationId,startDate, startTime, startVenue, days, peopleCount,participants, budgetPerPerson, ageId, triptype, travel,userId, created, hotelId, transportId) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    dbConfig.query(query_, [tripDestinationId, start_date, start_time, start_venue, days, people_count, participants, budget_per_person, ageId, triptype, travel, userId, created, hotelId, transportId], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server");
            console.log(err);
            return res.status(401).send({ success: false, message: "Error connecting to server!" });
        } else {
            res.status(200).send({ success: true, data: { message: "Trip successfully created" } });
        }
    });
};

exports.getDestinationList = function (req, res, next) {
    let query_ = "SELECT * from tripdestination";
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

exports.getTrips = function (req, res, next) {
    let userId = req.body.userId;
    let query_ = "SELECT * from trip natural join tripDestination where userId=?";
    dbConfig.query(query_, userId, (err, rows) => {
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

exports.getTripsById = function (req, res, next) {
    let tripId = req.body.tripId;
    let query_ = "SELECT * from trip natural join tripDestination where tripId=?";
    dbConfig.query(query_, tripId, (err, rows) => {
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

exports.getRecommendedTrips = function (req, res, next) {
    let tripDesinationId = req.body.tripDesinationId;
    let days = req.body.days;
    let participants = req.body.participants;
    let budget_per_person = req.body.budget_per_person;
    let ageId = req.body.ageId;
    let travel = req.body.travel;
    let triptype = req.body.triptype;
    //console.log(tripDesinationId+" "+days+" "+participants+" "+budget_per_person+" "+ageId+" "+triptype+" "+travel);
    let query_ = "SELECT * from trip natural join tripDestination where tripDestinationId=? AND days<=? AND participants>=? AND budgetPerPerson<=? AND ageId=? AND travel=?";
    dbConfig.query(query_, [tripDesinationId, days, participants, budget_per_person, ageId, travel], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server !");
            console.log(err);
            return res.status(404).send({ success: false, message: "Error Connecting to Server!" });
        } else {
            if (rows.length != 0) {
                res.status(200).send({ success: true, data: rows });
            }
        }
    });
};

exports.getAgeList = function (req, res, next) {
    let query_ = "SELECT * from age";
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

exports.getTravelList = function (req, res, next) {
    let query_ = "SELECT * from travel";
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