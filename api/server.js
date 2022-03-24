const express = require("express")
const carRouter = require('./cars/cars-router')
const {logger} = require('./cars/cars-middleware')
const server = express()
server.use(express.json())

server.use(logger)
server.use('/api/cars', carRouter)
server.use('/', (req,res) => {
    res.status(200).json({
        message: 'Best Car For Sale'
    })
})
// DO YOUR MAGIC

module.exports = server
