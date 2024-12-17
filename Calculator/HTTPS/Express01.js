// const express = require("express");

// function calculateSum(n){
//     let ans = 0;
//     for(let i=0; i<=n; i++){
//           ans += i;
//     }
//     return ans;
// }

// const app = express();

// app.get("/", (req, res) => {
//    const n = req.query.n;
//    const ans = calculateSum(6);
//    res.send(ans)
// });

// app.listen(3000);

// const express = require("express");

// const app = express();

// function sum(n){
//     let ans = 0;

//     for(let i = 0; i<=n; i++){
//         ans += i;
//     }
//     return ans;
// }

// app.get("/", (req, res) => {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("Hi your ans is", ans);
// })

// app.listen(3000);

// abb yha se query params bhi ayenge ki matlab if i try to add some value of n to mai query params ka use kar sakta hu;
// run on your local Machine localHost:3000/?n=10; to yha se 10 tak addition ho jayega;

// iskp chala kle dekh local server pe chalta hai ya ni?

// const express = require("express");
// const app = express();

// function sum(n){
//     for(let i=0; i<=n; i++){
//         ans += i;
//     }
//     return ans;
// }

// app.get("/", (req, res) => {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send(ans);
// })
// app.listen(3000);

// const express = require("express");
// const app = express();

// const users = [{
//     name: "John",
//     kidneys: [{
//         healthy: false,
//     }]
// }];

// app.get("/", (req, res) => {
//      const johnKidney = users[0].kidneys;
//      const numberOfKidney = johnKidney.length;
//      let numberOfHealthyKidney = 0;
//      for(let i=0; i<johnKidney.length; i++){
//         if(johnKidney[i].healthy){
//             numberOfHealthyKidney += 1;
//         }
//      }
//     const numberOfUnHealthyKidney = numberOfKidney - numberOfHealthyKidney;
//     res.json({
//         johnKidney,
//         numberOfHealthyKidney,
//         numberOfUnHealthyKidney,
//     });
// });

// app.listen(3000);

const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidney: [{
        healthy: true,
    }]
}];

app.get("/", (req, res) => {
   const johnKidney = users[0].kidney;
   let numberOfKidney = johnKidney.length;
   let numberOfHealthyKidney = 0;
   for(let i=0; i<=numberOfKidney; i++){
      if(johnKidney.healthy){
        numberOfHealthyKidney += 1;
      }
   }
   const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;

   res.json({
     johnKidney,
     numberOfHealthyKidney,
     numberOfUnhealthyKidney,
   })
});

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!",
    })
});

app.put("/", (req, res) => {
     for(let i=0; i<users[0].kidney.length; i++){
        users[0].kidney[i].healthy = true;
     }
     res.json({

     })
});

// remove all unHealthy kidneys;
app.delete("/", (req, res) => {
    const newKidney = [];
    for(let i=0; i<users[0].kidney.length; i++){
        if(users[0].kidney[i].healthy){
            newKidney.push({
                healthy: true
            })
        }
    }
    users[0].kidney = newKidney;

    res.json({
        msg:"Done!"
    })
});


app.listen(3000);