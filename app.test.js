import express from 'express'
import filmesRouter from './src/routes/filmes.js'
import request from 'supertest'

function getApp() {
    const app = express()
    app.use(express.json())
    app.use(filmesRouter)
    return app
}

describe("Testes de API", () => {
    it("Verifica se o status da API retorna 200", async () => {
        const app = getApp()
        const response = await request(app).get('/api/filmes')

        expect(response.statusCode).toBe(200)
    })    
})

