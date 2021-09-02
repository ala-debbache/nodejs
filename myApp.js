var express = require('express');
var app = express();

app.get("/",(req,res)=>{
    res.send("Hello Express");
});

app.listen(port=3000,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});




































 module.exports = app;
