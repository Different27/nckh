const express = require('express')
const { connectToDb, getDb} = require('./db.js')
const app = express()

app.use(express.json())
let db

connectToDb((err)=>{
    if (!err){
        app.listen(3000, () => {
            console.log('app listen on port 3000')
        })
        db = getDb()
    }
})

//routes
app.get('/display', (req, res)=>{
    let airQuality = []
    db.collection('airQuality') 
    .find()
    .forEach(dataAir=> airQuality.push(dataAir))
    .then(()=>{
        res.status(200).json(airQuality)
    })
    .catch(()=>{
        res.status(500).json({error:"Could not feacth the documents"})
    })
})

const hostname = 'localhost'
const port = 3000


app.get('/', (req, res)=>{
    res.end('<h1> Hello word</h1>')
})

app.listen(port, hostname, ()=>{
    console.log('hello long, Im running at '+  hostname + ':'+ port )
})