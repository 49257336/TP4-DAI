import express from "express";
import {devolverHora, fecha} from "./time.js";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Bienvenido/a");
});

app.get('/hora', (req, res) => {
    res.send(`${devolverHora()}`);
});

app.get('/fecha-completa', (req, res) => {
    res.send(`${fecha()}`);
})

app.listen(port, () => {
    console.log("escuchando el puerto "+port);
});