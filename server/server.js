const express = require('express')
const cors= require('cors')
const db = require('./db')
const seed = require('./seed')


const app = express()
app.use(express.json())
app.use(cors())

const {createArt, getArt, deleteArt, updateArt}  =require('./controller')

app.post('/api/seed', seed)
app.get('/api/art', getArt)
app.delete('/api/:id', deleteArt)
app.post('/api/art', createArt)
app.put('/api/art/:id', updateArt)


//db.sync()

app.listen(4000, () => console.log('Running on Beyonce Internet'))

