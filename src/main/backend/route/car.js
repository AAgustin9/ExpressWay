const express = require('express');
const router = express.Router();
const carController = require('../controller/car');

router.post('/addCar', carController.addCar);

modue.exports = router;