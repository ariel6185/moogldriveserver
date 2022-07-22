const fs = require('fs');

exports.getUsers= async()=>{
    const res = fs.readFileSync('./root/users.json','utf8')  //sync or without sync will need a callback func - 
    return res;
}


