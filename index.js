const express = require("express");

const fs = require('fs');

const RutaArchivo = './data/hola_mundo.txt';

let texto = '';

const port = process.env.PORT ?? 8002;

fs.readFile(RutaArchivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error al leer el archivo: ${err}`);
    return;
  }

  texto = data;
});

const app = express();

app.listen(port, (err) => {
    console.log(
        !err
        ? `server running at http://localhost:${port}.\n Press Ctrl + C to terminate...`
        : `server failed with error: ${err}`
    );
});

app.get("/", (req,res) => {
    res.send(`${texto}`);   
});