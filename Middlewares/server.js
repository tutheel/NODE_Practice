const express = require('express')
const app = express();
const path = require('path');
const logEvents = require('./middleware/logEvents')
const PORT = process.env.PORT || 3500;

//writting your custome middleware
app.use((req,res,next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`,'reqLog.txt')
    console.log(`${req.method} ${req.path}`)
    next();
})

//built in middleware to handle urlencoded data
app.use(express.urlencoded({extended:false}))

//built in middleware for json
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname,'/public')));


app.get('^/$|/index(.html)?',(req,res)=>{
        res.sendFile(path.join(__dirname,"views","index.html"))
    })

app.get('/new-page(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","new-page.html"))
})

//redirect
app.get('/old-page(.html)?',(req,res)=>{
    res.redirect("new-page.html")
})

//chaining routers
const one = (req,res,next)=>{
     console.log("one")
     next()
}
const two = (req,res,next)=>{
     console.log("two")
     next()
}
const three = (req,res)=>{
     console.log("three")
     res.send("finished")
     
}
app.get('/chain(.html)?',[one,two,three])

//setting a status Code
app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
    
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));