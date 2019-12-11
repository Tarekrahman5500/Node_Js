const express = require('express');
const router = express.Router();
const post = require('../model/post');


router.get('/',(req,res) =>
{
    res.send("We are posts again");

});

router.get('/specific',(req,res) =>
{
    console.log('Connected to specific');
    res.send(" we are on specific posts again");

});

router.post('/',(req,res)=>{
    console.log(req.body);
});
module.exports = router;