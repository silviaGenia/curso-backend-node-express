const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // respuesta que se envia al cliente
  //res(Retornar)
  res.send("Hola mi server en express");
});

app.listen(port, () => {
  console.log("Mi port" + port);
});
