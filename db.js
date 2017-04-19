const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const getData = filter => {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(process.env.DB_CONNECTION, (err, db) => {
            if (err) {
                reject(err)
            }
            const collection = db.collection('films')
            collection.find(filter).toArray((err, data) => {
                if (err) {
                    reject(err)
                }
                db.close()
                return resolve(data)
            })
        })
    })
}

module.exports = getData