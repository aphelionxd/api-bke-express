import express from 'express'

const router = express.Router()

router.post('/signup', (req, res) => {
    res.json({message: "Rota de Auth/Signup"})
})
router.post('/login', (req, res) => {
    res.json({message: "Rota de auth/login"})
})
router.post('/logout', (req, res) => {
    res.json({message: "Rota de auth/logout"})
})

export default router