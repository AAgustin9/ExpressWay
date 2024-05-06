const mongoose = require('mongoose')

const carData = new mongoose.Schema({
    side: {type: String, required: true },
    hour: {type: String, required: true },
});

const Car = mongoose.model('Car', carData);

module.exports = Car;