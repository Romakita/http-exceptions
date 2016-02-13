import * as Chai from 'chai';
import * as HTTPException from "../../index";

var expect = Chai.expect;

describe('HTTPExceptions', function(){


    it('should do something', function(){

        expect(HTTPException).to.be.an('object');

    });

    describe('BadGateway', function(){
        it('should emit an exception', function(){

            try{
                throw new HTTPException.BadGateway('message');
            }catch(err){
                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(502);
                expect(err.toString()).to.equal('BAD_GATEWAY(502): message');
            }

        });
    });


    describe('BadRequest', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.BadRequest('Parameters required [t1,t2]');
            } catch (err) {
                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(400);
                expect(err.toString()).to.equal('BAD_REQUEST(400): Parameters required [t1,t2]');
            }

        });
    });


    describe('Forbidden', function() {
        it('should emit an exception', function () {

            try {
                throw new HTTPException.Forbidden('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(403);
                expect(err.toString()).to.equal('FORBIDDEN(403): message');
            }

        });
    });

    describe('GatewayTimeout', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.GatewayTimeout('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(504);
            }

        });
    });

    describe('InternalServerError', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.InternalServerError('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(500);
            }

        });
    });

    describe('MethodNotAllowed', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.MethodNotAllowed('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(405);
            }

        });
    });

    describe('NotAcceptable', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.NotAcceptable('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(406);
            }

        });
    });


    describe('NotFound', function() {

        it('should emit an  exception', function () {

            try {
                throw new HTTPException.NotFound('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(404);
            }

        });
    });

    describe('NotImplemented', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.NotImplemented('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(501);
            }

        });
    });

    describe('PaymentRequired', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.PaymentRequired('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(402);
            }

        });
    });

    describe('ProxyError', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.ProxyError('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(502);
            }

        });
    });

    describe('ServiceUnvailable', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.ServiceUnvailable('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(503);
            }

        });
    });

    describe('Unauthorized', function() {

        it('should emit an exception', function () {

            try {
                throw new HTTPException.Unauthorized('message');
            } catch (err) {

                expect(err instanceof HTTPException.HTTPException).to.be.true;
                expect(err.status).to.equal(401);
            }

        });
    });
});
