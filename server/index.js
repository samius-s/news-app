import express from 'express'
import mongoose from 'mongoose'
import cors from './middleware/cors.middleware.js'
import fileUpload from 'express-fileupload'
import router from "./routers/routers.js"

const PORT = 5000
const DB_URL = "mongodb+srv://user:user@cluster0.ms6ze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

app.use(cors)
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload())
app.use('/api', router)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })

        app.listen(PORT, () => {
            console.log('Server started on port', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()