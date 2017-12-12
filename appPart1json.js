'use strict';

const express = require ('express');
const app = express();

const jsonParser = require('body-parser').json; //only using json funcitonality of body parser i this app

const jsonCheck = (req, res, next) => {
  if(req.body){
    console.log("The sky is", req.body.color);
  }else{
    console.log("There is no body property on the request");
  }  
  next();
}

app.use(jsonCheck); //POSTMAN JSON => not read ..no body property
app.use(jsonParser()); //when app recieves a req, this midware will pass req body as json and be accessible thru req.body property
app.use(jsonCheck); //POSTMAN JSON {"color" : "blue"}  => The sky is blue


const port = process.env.port || 3000;

app.listen(port, function(){
  console.log('express server is listening on port', port)
});