const express = require('express')
const mysql = require('mysql2')
const path = require('path')
const server = express()

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'temperature'
})

console.log(db)

server.use(express.static(path.resolve('public')))

server.get('/api/temperature/:year', (req, res) => {
    db.query(`SELECT * FROM temperature WHERE year = ${req.params.year} `, (err, rows) => {
        if (err) throw err.message
        res.status(200).json(rows)
    })
})


server.listen(3000)