const express = require('express')
const app = express()
const db = require('./db/conn.js')
require('dotenv').config()

app.set("trust proxy", 1);

app.get('/connectdb', (req, res) => {
    db.connectToServer().then((result) => {
        console.log(result);
    }).then(db.listDatabases().then(() => {
        console.log("Listed Databases")
        const text = "Connected to database and listed the databases! Check server logs!"
        res.send(text)
    }))
  })

app.listen(3001, () => console.log("Server started"))