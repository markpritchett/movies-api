const express = require('express')
const app = express()
const getData = require('./db')

const mapFilm = (req, film) => {
    const { _id: id, title, year } = film
    return {
        id,
        title,
        year
    }
}

app.get('/films', async (req, res) => {
    let films = await getData({})
    let result = films.map(film => mapFilm(req, film))
    return res.json(result)
})

app.get('/films/:id', async (req, res) => {
    let films = await getData({ _id: parseInt(req.params.id) })
    let result = films.map(film => mapFilm(req, film))

    if (result.length === 0) {
        return res.status(404).end()
    }

    return res.json(result[0])
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})

module.exports = app