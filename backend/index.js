const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Minha primeira versão está online!')
})

app.listen(3333)