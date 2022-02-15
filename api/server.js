const express = require("express")
const carsRouter = require('./cars/cars-router')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
    res.send(`
      <h2>Database Schema Design</h2>
      <p>Welcome to Auto Database Schema Design</p>
    `);
});

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found',
    })
})

module.exports = server
