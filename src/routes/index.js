const express = require('express');
const userRouter = require('./user.router');
const citiesRouter = require('./cities.router');
const hotelRouter = require('./hotel.router');
const imageRouter = require('./image.router');
const bookingRouter = require('./booking.router');
const reviewRouter = require('./review.router');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter);
router.use(citiesRouter);
router.use(hotelRouter);
router.use(imageRouter);
router.use(bookingRouter);
router.use(reviewRouter);

module.exports = router;