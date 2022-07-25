const fs= require('fs');
const path = require('path');
const fileController = require('../DL/fileController')


async function readFolder({folderName}){
    if(!folderName) throw ('no folderName provided');
    
    if(! fs.existsSync(path.join(folderName)) ) throw ('folder does not exist');
    
    const files = await fileController.readFolder(path.join(folderName))
    return files
}

async function createFolder({folderName}){
    
    if(!folderName) throw ('no folderName provided');
    
    if( fs.existsSync(path.join(folderName)) ) 
    
    throw ("Folder already exist");
    
    const folder = await fileController.createFolder(folderName)
    return folder
}

async function saveFile(file, myPath){
    console.log("logic", file)
    const res = await fileController.saveFile(file, myPath)
    return res
}

async function readFile(filename){
    
    if(!filename) throw ('no filename provided');
    if(! fs.existsSync(path.join(filename)) ) throw ('file does not exist');
    
    const res =await fileController.readFile(filename)
    return res;
}

async function createFile({filename, fileData}){

    if(!filename) throw ('no filename provided');

    let files = fs.readdirSync(path.join("root"))
    files.forEach(f =>{ if(f===filename){
        throw ("File " + filename + " already exists");
        }})

    const file = await fileController.createFile(filename,  fileData)
    return file
}

async function deleteFile(filename){
    
    if(!filename) throw ('no filename provided');
    if(! fs.existsSync(path.join(filename)) ) throw ('file does not exist');
    
    const res =await fileController.deleteFile(filename)
    return res;
}

async function renameFile(filename, newFilename){
    
    if(!newFilename) throw ('no new filename provided');
    if(!filename) throw ('no origin filename provided');
    if(! fs.existsSync(path.join(filename)) ) throw ('file does not exist');
    
    const res =await fileController.renameFile(filename, newFilename);
    return res;
}

module.exports = { readFolder, createFolder, saveFile, readFile, createFile, deleteFile, renameFile} 
// updateFile, 
