# HTTPExceptions [![Build Status](https://travis-ci.org/Romakita/httpexceptions.svg?branch=master)](https://travis-ci.org/Romakita/httpexceptions)

> Provide Exceptions for REST API based on Express.js.

This module lets you to throw an HTTPException quickly.

## Features
* Very Simple API
* Two middlewares are available. HTTPException.mime() and HTTPException.globalHandler()
* Some HTTP code are implemented : 
 * BadRequest
 * Unauthorized
 * PaymentRequired
 * Forbidden
 * NotFound
 * MethodNotAllowed
 * NotAcceptable
 * InternalServerError
 * NotImplemented
 * BadGateway
 * ProxyError
 * ServiceUnvailable
 * GatewayTimeout


## Install

Use `npm install httpexceptions`.

## API

``` javascript
   var httpException = require('httpexception');
   var express = require('express');
   var app = express();
   
   httpException.debug(true);
   
   app.use(httpException.mime('application/json'));
   
   //or
    app.use(httpException.mime(['application/json', 'text/xml']));
   
   app.get('/my/route/exception', function(req, res){
   
        throw new httpException.BadRequest('Custom Message'); //Emit 
        
        //or
        throw new httpException.HTTPException(510, 'Custom Message');
   
   });
   
   //at the end
   //GlobalHandler middleware catch exception and send response to the client
   app.use(httpException.globalHandler());
```

## Test


Use `npm test`.


[travis]: https://travis-ci.org/