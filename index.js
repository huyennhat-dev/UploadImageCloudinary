const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload')

//auth routes
const aRouter = require('./routers/router')

dotenv.config()

//connectDB
mongoose.connect((process.env.MONGODB_URL), { useNewUrlParser: true }, () => {
    console.log('Connect to MongoDB successfully')
})

app.use(fileUpload({
    useTempFiles: true
}))


//routes
app.use('/uploadimage/api/v1', aRouter)

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
    console.log(`Server is running to port ${PORT}`)
})