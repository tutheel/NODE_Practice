const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors')
const errorHandler= require('./middleware/errorHandler')
const {logger} = require('./middleware/logEvents');
const router = require('./routes/subdir');
const PORT = process.env.PORT || 3500;

//writting your custome middleware
app.use(logger)

// // Enable CORS for all routes - CORS= cross origin resource Sharing
app.use(cors());

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

// built-in middleware to handle urlencoded data
// in other words, form data:  
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({extended:false}))

//built in middleware for json
app.use(express.json());

//serve static files
app.use("/",express.static(path.join(__dirname,'/public')));
app.use("/subdir",express.static(path.join(__dirname,'/public')));

//Router handlers
app.use('/',require('./routes/root'))
app.use('/subdir',require('./routes/subdir'))

app.all('*', (req, res) => {
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }
     //throw error when you get a json request
    else{
         res.json({"error":'404 Not Found'})
    }
})

//server error
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));