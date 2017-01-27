'use strict';

let express = require('express');
  let http = require('http');
  let index = require('./routes/index.js');

  let app = express();
  // Куча всяких настроек express`а        
  app.set('view engine', 'jade'); 
  app.get('/', index.index);

  http.createServer(app).listen('8080'), function(){
    console.log('Express server listening on port 8080');
  };