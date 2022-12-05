const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const contactUSController = require('../controllers/contact-us');

const router = express.Router();

router.get('/contact-us', contactUSController.getContactUS);

router.post('/contact-us',contactUSController.postContactUS)

module.exports = router;