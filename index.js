const express = require('express');
const {MongoClient} = require('mongodb');
const app = express();

const url = "mongodb://localhost:27017/dbname"

new MongoClient(url).connect()
    .then(() => console.log("Mongodb is connected"))
    .catch(err => console.log(err))



app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
})