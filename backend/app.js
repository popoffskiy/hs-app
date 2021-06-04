const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const client = require('./db.js')
const db = client.db()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    try {
        res.json('Try again later.')
    }
    catch (err) {
        console.log(err)
        res.json('Try again later.')
    }
})

app.get('/items', async (req, res) => {
    res.json(await db.collection('items')
    .find({})
    .toArray())
})

app.post('/items', async (req, res) => {
    const body = req.body
    const collection = db.collection('items')
    collection.insertOne(body)
    res.end()
})

module.exports = app
