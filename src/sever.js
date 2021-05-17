'use strict';

const express = require('express');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

const logger = require('./middlwares/logger.js');
const validator = require('./middlwares/validator.js');


const app = express();

app.use(express.json());
app.use(logger);

app.get('/', (req , res)=>{
  res.send('Hello and welcom to my server');
});

app.get('/person', validator , (req,res)=>{
  let personName = req.query.name ; 
  res.json({name : personName});

});


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start:start,
};

function start(port) {
  app.listen(port, () => console.log(`Server is listening to port ${port}`));
}

