'use strict';

const express = require ('express');
const app = express();
const routes = require("./routes");

const jsonParser = require('body-parser').json; //only using json funcitonality of body parser i this app
const logger = require('morgan');


app.use(logger("dev"));
app.use(jsonParser()); //when app recieves a req, this midware will pass req body as json and be accessible thru req.body property

app.use("/questions", routes);

//catch 404 and forwar to error handler
app.use((req, res, next) => {
    const err = new Error ("Not found");
    err.status = 404;
    next(err)
});

//error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
          error:{
             message: err.message
          }
    });
});


const port = process.env.port || 3000;

app.listen(port, function(){
  console.log('express server is listening on port', port)
});