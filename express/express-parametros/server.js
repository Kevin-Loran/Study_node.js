const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="qualquercoisa"><br>
  Outro campo: <input type="text" name="aquioutrocampo">
  <button>Olá mundo</button>
  </form>
  `);
});

app.get("/testes", (req, res) => {
  console.log(req.query);
  res.send(req.query.facebookprofile || "sem query");
});

app.get("/testes/:idUsuarios", (req, res) => {
  console.log(req.params);
  res.send(`ID: ${req.params.idUsuarios}`);
});

app.get("/testes/:idUsuarios/:parametro", (req, res) => {
  console.log(req.params);
  res.send(`ID: ${req.params.idUsuarios}, Param: ${req.params.parametro}`);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
});