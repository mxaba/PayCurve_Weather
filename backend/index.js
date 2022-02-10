const express = require('express');
const mongoose = require('mongoose');

const mongodbURL = "mongodb+srv://PayCurve_Wether_App:PayCurve_Wether_App@paycurve-weather-app.2lr9s.mongodb.net/PayCurveWeatherApp?retryWrites=true&w=majority";
mongoose.connect(
    mongodbURL,
    {
   useNewUrlParser: true
    }
).then(console.log("Connected to the database")).catch((err) => console.log(err));


let app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(8080);