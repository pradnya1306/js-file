const fs=require('fs')

// create new file with arrow function
// fs.writeFile("my_async.txt","i am software engineer",(err)=>{
//     console.log("file created");
//     console.log(err)
// })


// create file 
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//     console.log(err)
//   }); 

// append file with arrow function
// fs.appendFile("my_async.txt","like my channel and subscribe",(err)=>{
//     console.log ("task completed")
//     console.log(err)
// })

// append file
fs.appendFile("mynewfile3.txt","see my  two channel",function(err){
    if (err) throw err;
    console.log("completed")
    console.log(err)
})

// open new file
// fs.open("pradnya.txt","w",function(err,file){
//     if (err) throw err;
//     console.log("saved")
// })

// fs.open("pradnya.txt","w",(err,file)=>{
//         console.log("saved")
//     })

// read file with arrow function
// fs.readFile("my_async.txt","utf-8",(err,data)=>{
//     console.log (data)
// })

// read file
// fs.readFile("mynewfile3.txt","utf-8",function(err,data){
//     if (err) throw err;
//     console.log(data)

// /rename file with arrow
// fs.rename("my_async.txt","MYasync.txt",(err)=>{
//     console.log("file renamed")
// })

// rename file
// fs.rename("mynewfile3.txt","MYNEWFILE.txt",function(err){
//     if (err )throw err;
//     console.log("renmed file")
// })

// delete file with arrow
// fs.unlink("pradnya.txt",(err)=>{
//     console.log("delete file")
// })