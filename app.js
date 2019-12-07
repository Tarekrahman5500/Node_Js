const express = require('express');
const  app = express();

app.get('/',(req,res) =>
{
    res.send("We are Start again");

});
app.get('/posts',(req,res) =>
{
    res.send("We are posts again");

});
app.listen(300);