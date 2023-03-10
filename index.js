const express = require ("express")
const { default: next } = require("next")
const app = express()
const port = 2001

//midleware : menjalankan semua jenis request
const login = (req,res,next) => {
            console.log(`${req.method},${req.url}`)
        next()
    }

app.use(login)

//get semacam routing 
app.get("/", //patch 
(req,res)=> {res.send('helo world!') //handler 
})

app.post("/", //patch 
(req,res)=> {res.send('helo world!') //handler 
})

app.get("/product",(req,res)=>{
    res.json([
    'apple',
    'samsung',
    'xiaomi',
    'oppo',
    ])
})





app.listen(port,()=>{
    console.log(`server sedang berjalan di http://localhost:${port}`)
})

