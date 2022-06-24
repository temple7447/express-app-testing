const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('you are in the home page')
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`you connected to port ${PORT}`)
})