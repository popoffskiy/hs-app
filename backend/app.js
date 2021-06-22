const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Items = require('./modules/items')
const PORT = process.env.PORT || 3500

var Excel = require('exceljs')
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

const categories = [
    {
        type: 'armor',
        key: 'armors_unique'
    },
    {
        type: 'helmets',
        key: 'helms_unique'
    },
    {
        type: 'gloves',
        key: 'gloves_unique'
    },
    {
        type: 'boots',
        key: 'boots_unique'
    },
    {
        type: 'amulets',
        key: 'amulets_unique'
    },
    {
        type: 'charms',
        key: 'charms_unique'
    },
    {
        type: 'shields',
        key: 'shields_unique'
    },
    {
        type: 'belts',
        key: 'belts_unique'
    },
    {
        type: 'potions',
        key: 'potions_unique'
    },
    {
        type: 'rings',
        key: 'rings_unique'
    },
]

const rowParse = (sheet, type) => {
    sheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
        const collection = db.collection('items')
        currRow = sheet.getRow(rowNumber)
        collection.insertOne({
            rarityType: 'SATANIC',
            name: currRow.getCell(2).value,
            itemType: type,
            id: currRow.getCell(2).value.toLowerCase().replace(/\s/g, '_').replace(/'/g, '')
        })
    })
}


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

app.post('/generate-mocks', async (req, res) => {
    const workbook = new Excel.Workbook()
    workbook.xlsx.readFile('./files/items.xlsx')
    .then(() => {
        categories.forEach((item) => {
            const workSheet = workbook.getWorksheet(item.key)
            rowParse(workSheet, item.type)
        })
    }).then(() => {
        res.end()
    })
})

module.exports = app

app.listen(PORT, () => console.info('hey hey'));