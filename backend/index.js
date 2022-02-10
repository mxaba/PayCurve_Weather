const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const routes = require('./routes/routes');

const mongodbURL = "mongodb+srv://PayCurve_Wether_App:PayCurve_Wether_App@paycurve-weather-app.2lr9s.mongodb.net/PayCurveWeatherApp?retryWrites=true&w=majority";
mongoose.connect(
    mongodbURL,
    {
   useNewUrlParser: true
    }
).then(console.log("Connected to the database")).catch((err) => console.log(err));


let app = express();
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080'
}))

app.use(express.json())

app.use('/api', routes)

app.listen(8081);