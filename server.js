const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000,  function(){
    console.log(`listening at 3000`)
});

/*
//how route work
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.post('/', (req, res) => {
    res.send('Hello World Post from rj!')   //using insomnia
});
app.get('/hello', (req, res) => {
    res.send('Hello World from rj!')
});
 */

//how to send parameter
//query parameter(multiple object can be passed)
 app.get("/", function(req,res){
     var obj = req.query;
     //res.send( obj)
        res.send("HelloQuery" + obj.name)
 });
 //path parameter
app.get("/project/:id", function(req,res){
    var obj = req.params;
   // res.send("Hello" + obj.id)
    //select *from project where id = obj.id
    res.send("ID is " + obj.id)
});
//parameter that comes in body when post and put request is done
app.post("/project/:id", function(req,res){
    var obj = req.body;
    res.send("Hello Post" + obj.name)
});