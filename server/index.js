const express = require('express')
const cors = require('cors')
const ctrl = require('./controller.js')

const app = express()
const port = 4004

app.use(express.json())
app.use(cors())

app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)

app.listen(port, () => console.log(`Assembled on port ${port}`))