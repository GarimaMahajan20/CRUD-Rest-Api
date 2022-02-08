const express = require('express');
const res = require('express/lib/response');
const  router =express.Router()

router.get('/', function(){
    res.send('GET request')
})


module.exports = router