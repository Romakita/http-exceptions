# httpexceptions 

[![Build Status](https://travis-ci.org/Romakita/httpexceptions.svg?branch=master)](https://travis-ci.org/Romakita/httpexceptions)
[![Coverage Status](https://coveralls.io/repos/github/Romakita/httpexceptions/badge.svg?branch=master)](https://coveralls.io/github/Romakita/httpexceptions?branch=master)
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


## Installation
```bash
$ npm install -g typescript typings 
$ npm install httpexceptions
```
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

```bash 
$ npm install -g mocha
$ npm test
```

## License

The MIT License (MIT)

Copyright (c) 2016 Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis]: https://travis-ci.org/