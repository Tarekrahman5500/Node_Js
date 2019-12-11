const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require('body-parser');

app.use(bodyparser.json());


require('dotenv/config');

const postsRout = require('./routes/posts');


app.use('/posts', postsRout);


app.get('/', (req, res) => {
    res.send("Home coming");
});


mongoose.connect(
    process.env.DB_CONNECTION
    , {useNewUrlParser: true}
    , () => {
        console.log('Connected to DB');
    });

app.listen(300, function (err) {
    if (err) {
        throw err
    }

    console.log('Server started on port 300')
});