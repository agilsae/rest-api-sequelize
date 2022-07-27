const Job = require('../model/model_jobs')

exports.getJobs = (req, res) => {
    Job.findAll().then(function (jobs) {
        return res.json(jobs);
    })
    .catch(function (err) {
        console.log('Something happend');
    });
}

// memberikan job spesifik sesuai dengan nama yang ada pada url
exports.getJobsByParams = (req, res) => {
    Job.findOne({
        where: {
            name: req.body.name,
        }
    })
    .then(function (job) {
        if (job == null) {
            return res.json('Not Found');
        }

        return res.json(job);
    })
    .catch(function (err) {
        console.log('Something happend');
    });
}

// memasukan job baru
exports.addJobs = (req, res) => {
    Job.create({
        name: req.body.name,
        attack: req.body.attack,
        defence: req.body.defence,
        agility: req.body.agility,
        magic: req.body.magic,
    })
    .then(function (job) {
        return res.json(job);
    })
    .catch(function (err) {
        console.log('Something happend');
    });
}

// mengubah job yang ada
exports.updateJobs = (req, res) => {
    Job.findOne({
        where: {
            name: req.body.name,
        }
    })
    .then(function (job) {
        if (job == null) {
            return res.json('Not Found');
        }

        return job.update({
            name: req.body.name || job.name,
            attack: req.body.attack || job.attack,
            defence: req.body.defence || job.defence,
            agility: req.body.agility || job.agility,
            magic: req.body.magic || job.magic,
        })
    })
    .then(function (job) {
        return res.json(job);
    })
    .catch(function (err) {
        console.log('Something happend');
    });
}

// menghapus job yang ada
exports.deleteJobs = (req, res) => {
    Job.findOne({
        where: {
            name: req.body.name,
        }
    })
    .then(function (job) {
        if (job == null) {
            return res.json('Not Found');
        }

        return job.destroy();
    })
    .then(function (job) {
        return res.json('Data has been deleted');
    })
    .catch(function (err) {
        console.log('Something happend');
    });
}

