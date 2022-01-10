const fs=require('fs')
// open file
// fs.open("myfile.txt","w",function(err){
//     if (err)throw err;
//     console.log("file created")
// })

// write file
// fs.writeFile("myfile.txt","my name is pradnya",function(err){
//     if (err) throw err;
//     console.log("write file")
// })

// append file
// fs.appendFile("myfile.txt","i am student",function(err){
//     if (err)throw err;
//     console.log("append data")
// })

// read file
var read=fs.readFile("pradnya.txt",function(err,data){
    if (err )throw err;
    console.log(data)
})

// rename file
// fs.rename("myfile.txt","pradnya.txt",function(err){
//     if (err) throw err;
//     console.log("rename file")
// })

// delete file
// fs.unlink("navgurukul.txt",function(err){
//     if(err) throw err;
//     console.log("delete file")
// })