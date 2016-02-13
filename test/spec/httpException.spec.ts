/**
 * Created by romakita on 01/09/15.
 */
var expect = require('chai').expect;
var HTTPException = require('../../index.js');

describe('HTTPExceptions', function(){


    it('should do something', function(){

        expect(HTTPException).to.be.an('object');

    });


    it('should emit a BadGateway exception', function(){

        try{
            throw new HTTPException.BadGateway('message');
        }catch(err){
            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(502);
            expect(err.toString()).to.equal('BAD_GATEWAY(502): message');
        }

    });

    it('should emit a BadRequest exception', function(){

        try{
            throw new HTTPException.BadRequest('Parameters required [t1,t2]' );
        }catch(err){
            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(400);
            expect(err.toString()).to.equal('BAD_REQUEST(400): Parameters required [t1,t2]');
        }

    });

    it('should emit a Forbidden', function(){

        try{
            throw new HTTPException.Forbidden('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(403);
            expect(err.toString()).to.equal('FORBIDDEN(403): message');
        }

    });

    it('should emit a GatewayTimeout exception', function(){

        try{
            throw new HTTPException.GatewayTimeout('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(400);
        }

    });

    it('should emit a InternalServerError exception', function(){

        try{
            throw new HTTPException.InternalServerError('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(500);
        }

    });

    it('should emit a MethodNotAllowed exception', function(){

        try{
            throw new HTTPException.MethodNotAllowed('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(405);
        }

    });

    it('should emit a NotAcceptable exception', function(){

        try{
            throw new HTTPException.NotAcceptable('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(406);
        }

    });


    it('should emit a NotFound exception', function(){

        try{
            throw new HTTPException.NotFound('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(404);
        }

    });

    it('should emit a NotImplemented exception', function(){

        try{
            throw new HTTPException.NotImplemented('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(501);
        }

    });

    it('should emit a PaymentRequired exception', function(){

        try{
            throw new HTTPException.PaymentRequired('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(402);
        }

    });

    it('should emit a ProxyError exception', function(){

        try{
            throw new HTTPException.ProxyError('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(502);
        }

    });

    it('should emit a ServiceUnvailable exception', function(){

        try{
            throw new HTTPException.ServiceUnvailable('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(503);
        }

    });

    it('should emit a Unauthorized exception', function(){

        try{
            throw new HTTPException.Unauthorized('message');
        }catch(err){

            expect(err instanceof HTTPException.HTTPException).to.be.true;
            expect(err.status).to.equal(401);
        }

    });
});
