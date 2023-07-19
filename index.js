// const http = require('http');
// const rupiah = require("rupiah-format");
// const host = "127.0.0.1";
// const port = 3002;
// const fs = require('fs');
// const os= require('os');

// //request adalah data masuk dari luar
// //response adalah data keluar dari sistem
// const server = http.createServer(function(request,response){

//     const nama = "dede Sudiahna";
//     let uang = 500000;
//     let jajan = 150000;
//     let sisa = uang + jajan;

//     uang = rupiah.convert(uang);
//     jajan = rupiah.convert(jajan);
//     sisa = rupiah.convert(sisa);

//     fs.appendFile("sisauang.txt", sisa, ()=>{
//         console.log("data uang berhasil di simpan")
//     });

//     const sisaRam = os.freemem();

//     console.log("sisa rupiah:",sisa )
//     const hasil = `halo nama saya ${nama},  saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa} sisa ram saya adalah : ${sisaRam}`;

//     response.statusCode = 200;
//     response.end(hasil);

// });

// server.listen(port, host,"", function() {
//     console.log(`server menyala di ${host}:${port}`);
// } );

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//routes utama kita method GET memunculkan di routing ./hello
// app.get('/hello', (req, res) => {
//     console.log({urlParam:req.query})
//   res.send('Tes')
// })

//untuk mengambil data dari PARAM
app.get("/username", (req, res) => {
  console.log({ urlParam: req.query.Name });
  res.send("Tes param");
});

app.get("/", (req, res) => {
  res.send("Utama");
});

//mengambil data dari body
app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });

  //jika username dari frontend sudah pernah diinput
  const username = req.body.username;
  if (username === usernameFromDbExist) {
    req.status(400).send("username is already taken");
  }
  res.send("username completed");
});

app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("put berhasil");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
