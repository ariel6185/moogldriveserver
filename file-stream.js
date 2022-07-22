const fs = require('fs');

//check if root exists ,return true
if(! fs.existsSync("root") ) 

//create root dir
fs.mkdirSync("root") 


//write new files
// fs.writeFileSync("root/name.txt", "the data that will be written to the file")// דורס 
// fs.writeFileSync("root/name.json",JSON.stringify({data: "the data"}))// דורס 


// //add to existing file
// fs.appendFileSync("root/name.txt", "\nadd more data to the file")

//read file
// const text = fs.readFileSync("root/name.txt", {encoding: "utf8"})
// const x = require('./root/name.json') 
// console.log(text,x);

//read files in the directory - as an array of file names
const files = fs.readdirSync("root/folder1",{withFileTypes:true});
console.log(files);

//delete file
// files.forEach(file=>fs.unlinkSync(`root/${file}`));
// fs.unlinkSync("root/name.txt"); //file
// fs.rmdirSync("root/name.txt"); //rm===remove , dir

// //rename file
// fs.renameSync("root/name.json", "root/newName.json");



// practise("ariel", "all is well enough")

function practise(file, content){
  
    let files = fs.readdirSync("root")
    files.forEach(f =>{ if(f===file){
        throw new Error("File " + file + " already exists");
        }})
    if(!content || typeof content === "number"){
        throw new Error(content + " is not a file name")
    }
    else if(typeof content === "string"){
        fs.writeFileSync(`${file}.txt`, content )
    }
    else if(typeof content === "object" || content.isArray()){
        fs.writeFileSync(`${file}.json`, JSON.stringify(content) )
    }
}
