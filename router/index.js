const express = require("express");
const router = express();
const jobs = require('./jobs')

router.get('/', (request, response) => response.send('Hello World'))

router.use(jobs)

module.exports = router;
