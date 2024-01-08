const express = require('express');
const app = express()

app.get('/' ,(req,res) => {
    res.send("<h1>Hello from Home page</h1>")
})

app.listen(8000 , ()=> {
    console.log(`Local host 8000`);
})


