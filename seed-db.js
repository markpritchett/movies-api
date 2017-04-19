const MongoClient = require('mongodb').MongoClient
const co = require('co')
require('dotenv').config()

co(function* () {
    const db = yield MongoClient.connect(process.env.DB_CONNECTION)
    console.log("Connected to database server")

    const collection = db.collection('films')

    console.log("Removing existing films...")

    yield collection.deleteMany({})

    var films = [
        {
            _id: 1,
            title: 'The Shawshank Redemption',
            year: 1994
        },
        {
            _id: 2,
            title: 'The Godfather',
            year: 1972
        }
    ]

    console.log("Adding films...")

    yield collection.insertMany(films)

    db.close()
})
    .then(() => console.log('Seeding of DB Complete'))
    .catch(err => {
        console.log(err.stack)
    })