
const express = require('express');

const {handleGenerateShortUrl} = require("../controllers/url.controllers");
const router = express.Router();


router.post('/',handleGenerateShortUrl);

module.exports = router;