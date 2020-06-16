//imports
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//routes which should handle requests
const users = require('./server/routes/user-routes');
const trips = require('./server/routes/trip-routes');
const hotels = require('./server/routes/hotel-routes');
const transports= require('./server/routes/transport-routes');

const app = express();
const port = process.env.PORT||8080;

//using morgan & body-parser
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization,access-control-allow-origin');
    if(req.method=='OPTIONS'){
        res.header('Access-Control-Allow-Methos','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/users',users);
app.use('/trips',trips);
app.use('/hotels', hotels);
app.use('/transports', transports);

//server start
app.listen(port,()=>{
    console.log('Server started ' + port);
});