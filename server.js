const express = require('express')
const app = express()

app.get('/films', (req, res) => {
    return res.json(null)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app