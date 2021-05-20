const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get('serverPort')

const startApp = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'), { useUnifiedTopology: true, useNewUrlParser: true })

        app.listen(PORT, () => {
            console.log('Server started on port', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()