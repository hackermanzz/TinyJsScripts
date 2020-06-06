// This code is connects to the data base using the userID to extract the repective data and display it in the respective browser using the url extension


var express = require('express'); // Its an express is a minimal and flexible web application framework
var app = express();
var user = require("../Model/databaseExtraction")
var bodyParser = require('body-parser');// to allow extraction from postman
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());// parse application/json
app.use(urlencodedParser); // parse application/x-www-form-urlencoded

app.get('/api/tablename/:id' , (request , res)=>
{ // The link is a url extension for the app.
    var id = request.params.id;
    tablename.getItem(id,(err , result)=>
    {   // Using the Connection made to the database to extract data from the database using the Id from the previous line
        if(!err){res.send(result); }// If there is no error send the result to the browser's extension
        else{res.status(500).send('Error: ' + err)} // When there is a error, set the browser status to 500 and print out the error in the console
    })
})

app.put('/api/tablename/:id' , (request , res)=>
{
    var id = request.body.id;
    var field1 = request.body.field1;
    var field2 = request.body.field2;
    tablename.updateItem(id , field1 , field2 ,(err , result)=>
    {
        if(!err){res.status(200).send(result)}
        else{res.status(500).send('Error: ' + err)}
    })
})

app.delete('/api/tablename/:id' , (request , res)=>
{
    var id = request.body.id;
    tablename.deleteItem(id, (err , result)=>
    {
        if(!err){res.status(200).send(result)}
        else{res.status(500).send('Error: ' + err)}
    })
})

app.post('/api/tablename/' , (request , res)=>
{
    var id = request.body.id;
    var field1 = request.body.field1;
    var field2 = request.body.field2;
    tablename.addItem(field1, field2 ,id ,(err,result)=>
    {
        if(!err){res.status(200).send(result)}
        else{res.status(500).send('Error: ' + err)}
    })
})

module.exports = app