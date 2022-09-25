//Constantes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const model = require("./models");

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.post("/create", async (req, res) => {
  let reqs = await model.cobrançareal.create({
    numero: req.body.nomeDevedor,
    chavePix: req.body.numerocobranca,
    dataEnvio: req.body.datacobranca,
    nomeDevedor: req.body.nomeDevedor,
    valorDebito: req.body.valordebito,
    nomeEmpresa: req.body.nomeEmpresa,
    nomeDono: req.body.nomecobrador,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  if (reqs) {
    res.send(JSON.stringify("A cobrança foi enviada com sucesso!"));
  }
});

//Start server
let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Servidor Rodando");
});
