const express = require('express');

const router = express.Router();

const movieDataController = require('../controllers/movieDataController');

router.get('/movies', movieDataController.getMovieData);

module.exports = router;