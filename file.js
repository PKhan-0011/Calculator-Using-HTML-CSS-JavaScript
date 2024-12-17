//file pe kaam karne ke liye hame fs ka use karna padta hai
// const fs = require("fs");

// Sync
// fs.writeFileSync("./test.txt", "Hey There!"); 

// //ASync
// fs.writeFile("./test.txt", "Hello World", (err) => {});

//Read File wali bat chit;
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// if i try for Asyn 
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// });


//  fs.appendFileSync("./test.txt", `${Date.now()} \n Bhai hai kya`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// fs.mkdirSync("my-docs");


// 