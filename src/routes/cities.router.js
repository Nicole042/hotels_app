const { getAll, create, getOne, remove, update } = require('../controllers/cities.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const citiesRouter = express.Router();

citiesRouter.route('/cities')
    .get(getAll)
    .post(verifyJWT, create);

citiesRouter.route('/cities/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = citiesRouter;