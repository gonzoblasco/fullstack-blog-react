import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

// Middlewares básicos
app.use(cors())
app.use(express.json())

// Ruta de healthcheck
app.get('/health', (req, res) => {
    res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' })
})

const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fullstack_blog'

async function start() {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('✅ Connected to MongoDB')

        app.listen(PORT, () => {
            console.log(`🚀 Server listening on http://localhost:${PORT}`)
        })
    } catch (err) {
        console.error('❌ Failed to start server:', err)
        process.exit(1)
    }
}

start()
