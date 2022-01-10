const fs=require("fs")
// for create folder
// fs.mkdirSync("syncronus file")

// create file
// fs.writeFileSync("myfile.txt","my name is pradnya")

// append another data in file
// fs.appendFileSync("myfile.txt"," i am student in navgurukul ")

// rename file
// fs.renameSync("myfile.txt","myNewFile.txt")

// const data=fs.readFileSync("myNewFile.txt","utf8")
// console.log(data)

// fs.writeFileSync("file.txt","i am your sister")
// for delete file
fs.unlinkSync("file.txt")
