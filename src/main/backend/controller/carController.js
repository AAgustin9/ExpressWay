const Car = require('../model/car');

exports.addCar = async (req, res) => {
    const newCar = new Car(req, res);
    try {
        await newCar.save();
        res.status(201).send(newCar);
    } catch (error) {
        res.status(400).send(error);
    }
}