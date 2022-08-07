const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost:27017/dbname")
    .then(() => console.log('Mongodb is connected'))
    .catch(err => console.log(err))


app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
})