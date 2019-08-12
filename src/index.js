const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('../config/config')
const app = express()

const mainService = require('./service/mainService')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port}...`))

app.get('/top5', (req, res) => {
    res.send(JSON.stringify(mainService.getTop5()))
})

app.get('/full', (req, res) => {
    res.send(mainService.getFull())
})