const express = require('express');

const { displayemp } = require('../controllers/empController');

const router = express.Router();

router.get("/", displayemp);

module.exports = router;