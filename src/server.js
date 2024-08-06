import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json(
        {
            message: "Olá ,umdo express!",
            success: "Sucesso ao executar API"
        }
    )
})

app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000')
})