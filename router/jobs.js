const express = require("express");
const route = express();
const {jobs} = require('../controller')

route.get(
    "/jobs",
    jobs.getJobs
)

route.get(
    '/jobsname',
    jobs.getJobsByParams
)

route.post(
    '/jobs',
    jobs.addJobs
)

route.put(
    '/jobs',
    jobs.updateJobs
)

route.delete(
    '/jobs',
    jobs.deleteJobs
)

module.exports = route