import express from 'express';
import filmesRouter from './routes/filmes.js';

const app = express()

app.use(express.json())
app.use(filmesRouter)

app.listen(33334, ola)

function ola() {
    console.log("Executando na porta 33334...")
}