const fs = require('fs');
const path = require('path');


function readFolder(folderName) {
    const files = fs.readdirSync(folderName);
    return files;
}

function createFolder(folderName) {
    const folder = fs.mkdirSync(path.join(folderName));
    return folder;
}

function saveFile(file, myPath) {
    console.log("controlr", file);
    const res = fs.writeFileSync(path.join( myPath, file.originalname) , file.buffer);
    return res;
}

function createFile(filename, fileData) {
    const file = fs.writeFileSync(path.join("root",filename), fileData);
    return file;
}

function readFile(filename){
    const res = fs.readFileSync(path.join("root",filename), 'utf8');  //sync or without sync will need a callback func - 
    return res;
}

function updateFile(filename, fileData){
    const res = fs.appendFileSync(path.join("root",filename), fileData);
    return res;
}

function deleteFile(filename){
    const res = fs.unlinkSync(path.join("root",filename))
    return res;
}

module.exports = {readFolder, createFolder, saveFile, createFile, readFile, updateFile, deleteFile }

