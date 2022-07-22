const express = require('express')
const router = express.Router();
const fs = require('fs');
const userLogic = require('../BL/userLogic')
router.get('/user', async(req, res)=>{
    try{
        const user = await userLogic.getUsers()
        res.send(user)
    }
    catch(err){console.log(err);}
})

module.exports = router