const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const places = require('./data/places.json')

app.use(cors())


app.get('/',(req,res)=>{
    res.send(places)
})


app.listen(port,()=>{
    console.log(`travel tour port ${port}`)
})