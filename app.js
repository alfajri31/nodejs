const express = require('express')
const homeRoute = require('./routes/home')

const app = express()

app.set('view engine','ejs')
app.set('views','views')

app.use('/',(req,res,next) => {
    res.render('index')
})


app.listen(3000)
