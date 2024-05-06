const express = require('express');
const router = express.Router();
const carController = require('../controller/carController');

router.post('/addCar', carController.addCar);

modue.exports = router;