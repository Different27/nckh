const {MongoClient} = require('mongodb')

let dbConnection 

module.exports={
    connectToDb:(cb) =>{
        MongoClient.connect('mongodb+srv://long:1234@cluster0.angauf4.mongodb.net/project')
        .then((client) => {
            dbConnection = client.db()
            console.log('connection')
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () =>dbConnection
}