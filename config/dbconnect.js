const Sequelize = require('sequelize')

const sequelize = new Sequelize('mainDB', null, null, {
    dialect: "sqlite",
    // opsi storage ini hanya untuk SQLite
    // jika menggunakan mysql atau postgress biasanya menggunakan opsi host
    storage: './test.sqlite',
});

module.exports = sequelize