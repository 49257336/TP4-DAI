import express from "express";
import {devolverHora, fecha} from "./time.js";

const app = express();

app.get('/', (req, res) => {
    res.send("Bienvenido/a");
});

app.get('/hora', (req, res) => {
    res.send(`${devolverHora()}`);
});

app.get('/fecha-completa', (req, res) => {
    res.send(`${fecha()}`);
})

export default app;

