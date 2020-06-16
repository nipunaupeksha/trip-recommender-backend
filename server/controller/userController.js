const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const config = require('../../config.json');
const dbConfig = require('../../mysql_connection');


exports.register = function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let mobile = req.body.mobile;
    let address=req.body.address;
    let nic = req.body.nic;
    let dob = req.body.dob;
    let gender = req.body.gender;
    let license = req.body.license;
    let occupation = req.body.occupation;
    let role = req.body.role;

    let query_ = "INSERT INTO user(fName,lName,address, mobile, email, nic, dob,gender, drivingLicense,occupation,password,role) values(?,?,?,?,?,?,?,?,?,?,?,?)";
    dbConfig.query(query_, [firstname, lastname,address,mobile,email,nic,dob, gender,license,occupation,password,role ], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server");
            console.log(err);
            return res.status(401).send({ success: false, message: "Error connecting to server!" });
        } else {
            res.status(200).send({ success: true, data: { email: email, password: password, message: "Account successfully created" } });
        }
    });
}

exports.login = function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let query_ = "SELECT * from user where email=?";
    dbConfig.query(query_, [email], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server");
            console.log(err);
            return res.status(401).send({ success: false, message: "Error connecting to server!" });
        } else {
            try {
                if (rows != null) {
                    if (password == rows[0]['password']) {
                        const token = jwt.sign({
                            user_id: rows[0]['userId'],
                            email: rows[0]['email'],
                            password: rows[0]['password'],
                            role: rows[0]['role']
                        },
                            config.env.JWT_KEY,
                            {
                                expiresIn: "2h"
                            });
                        return res.status(200).send({ success: true, message: "Login successful!", token: token });
                    } else {
                        console.log("Invalid credentials!");
                        return res.status(401).send({ success: false, message: "Invalid credentials!" });
                    }
                } else {
                    console.log("Invalid credentials!");
                    return res.status(401).send({ success: false, message: "Invalid credentials!" });
                }
            } catch (e) {
                console.log(e);
                return res.status(401).send({ success: false, message: "Invalid credentials!" });
            }
        }
    });
}

exports.forgetPassword = function (req, res, next) {
    let email = req.body.email;
    let query_ = "SELECT * from user where email=?";

    dbConfig.query(query_, [email], (err, rows) => {
        if (err) {
            console.log("Error connecting to server !");
            return res.status(404).send({ success: false, message: "Error Connecting to Server!" });
        } else {
            if (rows[0] != null) {
                let randomNo = Math.floor(100000 + Math.random() * 900000);
                let transporter = nodemailer.createTransport(smtpTransport({
                    service: 'gmail',
                    host: 'smtp.gmail.com',
                    auth: {
                        user: 'nuswflt@gmail.com',
                        pass: '168noctis'
                    }
                }));

                let mailOptions = {
                    from: 'nuswflt@gmail.com',
                    to: email,
                    subject: 'Reset password of NadeGura account',
                    text: 'Your six digit token:' + randomNo
                };

                let query_0 = "UPDATE user set forgetPasswordNo=? where email=?";
                dbConfig.query(query_0, [randomNo, email], (err, rows) => {
                    if (err) {
                        console.log("Error connecting to server !");
                        console.log(err);
                        return res.status(404).send({ success: false, message: "Error connecting to server!" });
                    } else {
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                                return res.status(404).send({ success: false, message: "Error connecting to mail server!" });
                            } else {
                                res.status(200).send({ success: true, data: { email: email, message: "Successfully sent the mail" } });
                            }
                        });
                    }
                });

            } else {
                console.log("Invalid email address!");
                return res.status(401).send({ success: false, message: "Invalid Email address!" });
            }
        }
    });
};

exports.changePassword = function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let query_ = "UPDATE user set password=? where email=?";
    dbConfig.query(query_, [password, email], (err, rows) => {
        if (err) {
            console.log("Error connecting to server !");
            console.log(err);
            return res.status(401).send({ success: false, message: "Error connecting to server!" });
        } else {
            res.status(200).send({ success: true, data: { email: email, password: password, message: "Password successfully changed" } });
        }
    });
};

exports.tokenValidation = function (req, res, next) {
    let email = req.body.email;
    let token = req.body.token;
    let query_ = "SELECT * from user where email=?";
    dbConfig.query(query_, [email], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server !");
            return res.status(404).send({ success: false, message: "Error connecting to server!" });
        } else {
            if (rows[0] != null) {
                if (rows[0]['forgetPasswordNo'] == token.trim()) {
                    res.status(200).send({ success: true, data: { email: email, message: "Valid token identified !" } });
                } else {
                    return res.status(401).send({ success: false, message: "Invalid token identified !" });
                }
            } else {
                console.log("Error connecting to server !");
                return res.status(404).send({ success: false, message: "Error connecting to server !" });
            }
        }
    });
};