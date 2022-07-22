const express = require('express'),
app= express();
fs =require('fs');

app.use(require("cors")())
app.use(express.json())

// app.use((req, res, next) => {  //צריך להיות למעלה כדי לפעול תמיד
//     try{
//     let logs = []
//     if(fs.exsistsSync("root/loger.json"))
//         logs = require("./root/logger.json")

//     logs.push( {url: req.originalUrl, date: Date.now()})
//     fs.writeFileSync("root/logger.json", JSON.stringify(logs)) //מייצר את הקובץ או דורס אותו
//     }
//     catch (e) {console.log(e);}
 
//     next();
// })
app.use('/users',require('./Routs/userRout'))
app.use('/files', require('./Routs/fileRout'))
// app.get("./users", (req,res)=>res.send("user"))

app.listen(3004, ()=>console.log("server running on port 3004"))
