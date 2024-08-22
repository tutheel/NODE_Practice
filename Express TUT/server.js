const express = require('express')
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

// app.get('/',(req,res)=>{
//     // res.send("Hello WORLD")// Displays Hello WORLD on web
//     // res.sendFile("./views/index.html",{root:__dirname}) 
//     // res.sendFile(path.join(__dirname,"views","index.html"))
// })

//Regular expressions
// app.get('^/$|/index.html',(req,res)=>{
//     res.sendFile(path.join(__dirname,"views","index.html"))
// })
//for "http://localhost:3500/index" it shows "Cannot GET /index" (404 ERROR)

app.get('^/$|/index(.html)?',(req,res)=>{
        res.sendFile(path.join(__dirname,"views","index.html"))
    })
//for "http://localhost:3500/index" it shows "index" (200 Success)


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