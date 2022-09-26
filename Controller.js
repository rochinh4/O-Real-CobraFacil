//Constantes
const express = require("express");
const bodyParser = require("body-parser");
const model = require("./models");
const cors = require("cors");

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.post("/create", async (req, res) => {
  let reqs = await model.User.create({
    'numero': req.body.numeroCobrancaUser,
    'chavePix': req.body.pixCobradorUser,
    'dataEnvio': req.body.dataCobrancaUser,
    'nomeDevedor': req.body.nomedevedorUser,
    ' valorDebito': req.body.valorDebitoUser,
    'nomeEmpresa': req.body.NomeEmpresaUser,
   ' nomeDono': req.body.nomeCobradorUser,
    'createdAt': new Date(),
   ' updatedAt': new Date(),
  });
});

//Start server
let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Servidor Rodando");
});
