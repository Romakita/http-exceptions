# HTTPExceptions [![Build Status](https://travis-ci.org/Romakita/httpexceptions.svg?branch=master)](https://travis-ci.org/Romakita/httpexceptions)

> Provide Exceptions for REST API based on Express.js.

This module lets you to throw an HTTP Exception quickly.

## Features

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
 
You can use HTTPExceptions method to throw a custom Exception (see example).


## Install

Use `npm install httpexceptions`.

## API

``` javascript
   var httpExceptions = require('httpexceptions');
   var express = require('express');
   var app = express();
   
   httpExceptions.debug(true);
   
   app.use(httpExceptions.mime('application/json'));
   // OR
   // app.use(httpExceptions.mime(['application/json', 'text/xml']));
   
   app.get('/my/route', function(req, res){
   
        throw new httpExceptions.BadRequest('Custom Message'); //Emit
        // OR
        // throw new httpExceptions.HTTPException(510, 'Custom Message');
   
   });
   
   app.get('/my/route/params', function(req, res){
      
        req.paramsRequired({
            query:['id']
        }); //throw a BadRequest exception if the parameters id isn't defined in queryParams
  
   });

   app.post('/my/route/params', function(req, res){

       req.paramsRequired({
           body:['id']
       }); //throw a BadRequest exception if the parameters id isn't defined in bodyParams

   });
   
   //GlobalHandler middleware catch exception and send response to the client
   app.use(function(err, request, response){

        if(err instanceof HTTPExpcetions.HTTPException){
            response.status(err.status).send(err.message);
        }

   });
```


## Test

Use `npm test`.


[travis]: https://travis-ci.org/