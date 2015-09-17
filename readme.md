# HTTPExceptions [![Build Status](https://travis-ci.org/Romakita/httpexceptions.svg?branch=master)](https://travis-ci.org/Romakita/httpexceptions)

> Provide Exceptions for REST API based on Express.js.

This module lets you to throw an HTTPException quickly.

## Features
* Very Simple API
* Two middlewares are available. HTTPException.mime() and HTTPException.globalHandler()

Some HTTP Exception are already implemented : 
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
 
You can use HTTPException method to throw a custom Exception (see example).


## Install

Use `npm install httpexceptions`.

## API

``` javascript
   var httpException = require('httpexception');
   var express = require('express');
   var app = express();
   
   httpException.debug(true);
   
   app.use(httpException.mime('application/json'));
   app.use(httpException.paramsRequired());
   
   // OR
   // app.use(httpException.mime(['application/json', 'text/xml']));
   
   app.get('/my/route/exception', function(req, res){
   
        throw new httpException.BadRequest('Custom Message'); //Emit 
        
        // OR
        // throw new httpException.HTTPException(510, 'Custom Message');
   
   });
   
   app.get('/my/route/params', function(req, res){
      
        req.paramsRequired({
            query:['id']
        }); //throw a BadRequest exception if the parameters id isn't defined in queryParams
  
   });
   
   //at the end
   //GlobalHandler middleware catch exception and send response to the client
   app.use(httpException.globalHandler());
```

## Test

Use `npm test`.


[travis]: https://travis-ci.org/