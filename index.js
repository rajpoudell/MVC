const express = require('express');
const {connectMongoDb} = require("./connections")

const {logReqRes}  = require("./middlewares/index")
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//connection 
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=> 
console.log("mongodb connected")
);

//Middleware - Plugin
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.text"))

//Routes
app.use("/api/users",userRouter)


app.listen(PORT , () => {
    console.log(`Local host 8000`);
})


