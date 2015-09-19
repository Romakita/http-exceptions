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

## Use Typescript definition

This module is written in Typescript. But don't use `import HttpExceptions = require('httpexceptions')` instead of 
`var httpException = require('httpexception');`. It's little buggy because, Error type in typescript is declared as 
variable / interface and when you import module, the compilator fail.


So, you can find file definition `httpexceptions.d.ts` in the module.

``` typescript
   /// <reference path="node_modules/httpexceptions/httpexceptions.d.ts" />
   
   var httpException = require('httpexception');
``   


## Test

Use `npm test`.


[travis]: https://travis-ci.org/