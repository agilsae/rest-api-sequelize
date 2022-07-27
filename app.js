// merujuk express, body-parser
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()
const sequelize = require('./config/dbconnect')


app.use(bodyParser.json())
app.use('/', router)

sequelize
    .authenticate()
    .then(function () {
        console.log('Koneksi ke db terlah berhasil.');
    })
    .catch(function (err) {
        console.log('Tidak dapat melakukan koneksi ke db: ', err);
    });



app.listen(3000, () => console.log('listenig on localhos:3000'))


module.exports = app