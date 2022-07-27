const sequelize = require('../config/dbconnect')
const Sequelize = require('sequelize')

// mendefinisikan model
const Job = sequelize.define('Job', {
    name: Sequelize.STRING,
    attack: Sequelize.INTEGER,
    defence: Sequelize.INTEGER,
    agility: Sequelize.INTEGER,
    magic: Sequelize.INTEGER,
});

// sinkronasi skema db
sequelize
    .sync({ force: true })
    .then(function () {
        // pada saat callback ini di panggil table sudah dibuat
        // dan kita sudah bisa memasukan data ke db
        return Job.bulkCreate([
            {
                id: 1,
                name: 'Warior',
                attack: 100,
                defence: 50,
                agility: 30,
                magic: 0,
            },
            {
                id: 2,
                name: 'Mage',
                attack: 10,
                defence: 20,
                agility: 50,
                magic: 100,
            },
        ]);

    })
    .then(function (jobs) {
        console.log('data berhasil di masukan');
    })
    .catch(function (err) {
        console.log('Error muncul saat membuat table: ', err);
    });

module.exports = Job