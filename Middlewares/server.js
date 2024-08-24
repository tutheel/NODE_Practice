const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors')
const errorHandler= require('./middleware/errorHandler')
const {logger} = require('./middleware/logEvents')
const PORT = process.env.PORT || 3500;

//writting your custome middleware
app.use(logger)

// // Enable CORS for all routes - CORS= cross origin resource Sharing
// app.use(cors());

///******* OR ********/
const whiteList = ["http://localhost:3500","https://www.YOURrrWebsite.com","http://www.google.com"]
const corsOption = {
    origin:(origin,callback)=>{
        //|| !origin
        if(whiteList.indexOf(origin)!== -1 || !origin ){
            callback(null,true)
        }else{
            callback(new Error('Not Allowed by CORS'))
        }

    },
    optionsSuccessStatus:200
}
app.use(cors(corsOption));


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
//app.use('/')
app.all('*',(req,res)=>{
    if(req.accepts('html')){
        res.status(404).sendFile(path.join(__dirname,"views","404.html"))
    }
    //throw error when you get a json request
    if(req.accepts('json')){
        res.json({error:'404 Not Found'})
    }
})

//server error
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));