const express = require('express'),
route = express.Router(),
fileLogic = require('../BL/fileLogic'),
path = require('path');
const multer= require('multer');
const upload = multer()

route.put('/',async(req, res) => {  // *?  req.query
    
    try{
        const files = await fileLogic.readFolder(req.body)
        res.send(files);
    }
    catch(err){console.log(err);res.status(404).send(err);}

})

route.post('/addFolder',async(req, res) => {
    
    try{
        const folder = await fileLogic.createFolder(req.body)
        res.send(folder);
    }
    catch(err){console.log(err);res.status(400).send(err);}

})

route.post('/addFile',upload.single('file'), async(req, res)=>{  //create property req.file
    try{
        console.log("routh", req.body);
        const file = await fileLogic.saveFile(req.file, req.body.myPath)
        res.send(file);
    }
    catch(err){console.log(err);res.send(err);}
})

route.put('/file', async(req, res)=>{
    try{
        const file = await fileLogic.readFile(req.body.myPath)
        res.send(file)
    }
    catch(err){console.log(err);res.status(404).send(err);}
})

route.put('/rename-file', async(req, res)=>{
    try{
        console.log("routh", req.body.fileName ,req.body.newName);
        const file = await fileLogic.renameFile(req.body.fileName ,req.body.newName)
        res.send(file)
    }
    catch(err){console.log(err);res.status(404).send(err);}
})

route.delete('/file', async(req, res)=>{ 
    try{
        console.log("routh", req.body);
        const file = await fileLogic.deleteFile(req.body.filename)
        res.send(file);
    }
    catch(err){console.log(err);res.send(err);}
})

module.exports = route
