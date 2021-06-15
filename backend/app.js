const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Items = require('./modules/items')
const PORT = process.env.PORT || 3500

const app = express()

// Connection to mongo DB
const dbURI = 'mongodb+srv://hs-admin:1qa@WS3ed@hs-cluster.alfrg.mongodb.net/hs?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((resolte) => console.log('connected to mongoDB'))
    .catch((error) => console.log('connection error', error))
// const client = require('./db.js')
// const db = client.db()

app.set('view engine', 'ejs')

app.use(express.static('public'))

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
    Items.find()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log('items req error', error)
        })
})

app.post('/items', async (req, res) => {
    const body = req.body
    const items = new Items(body)

    items.save()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log('items req error', error)
        })
})

module.exports = app

app.listen(PORT, () => console.info('hey hey'));