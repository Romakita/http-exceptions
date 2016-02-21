var Chai = require('chai');
var exception_1 = require("../lib/exception");
var badgateway_1 = require("../lib/badgateway");
var badrequest_1 = require("../lib/badrequest");
var forbidden_1 = require("../lib/forbidden");
var gatewaytimeout_1 = require("../lib/gatewaytimeout");
var internalservererror_1 = require("../lib/internalservererror");
var methodnotallowed_1 = require("../lib/methodnotallowed");
var notacceptable_1 = require("../lib/notacceptable");
var notfound_1 = require("../lib/notfound");
var notimplemented_1 = require("../lib/notimplemented");
var paymentrequired_1 = require("../lib/paymentrequired");
var proxyerror_1 = require("../lib/proxyerror");
var serviceunvailable_1 = require("../lib/serviceunvailable");
var unauthorized_1 = require("../lib/unauthorized");
var expect = Chai.expect;
describe('HttpExceptions', function () {
    describe('Exception', function () {
        it('should use innerException', function () {
            var exception = new exception_1.Exception(203, 'test', new Error('test'));
            expect(exception.status).to.equal(203);
            expect(exception.toString()).to.equal('HttpException(203): test, innerException: test');
        });
        it('should use innerException as string', function () {
            var exception = new exception_1.Exception(203, 'test', 'test');
            expect(exception.status).to.equal(203);
            expect(exception.toString()).to.equal('HttpException(203): test, innerException: test');
        });
        it('should use innerException as string', function () {
            var exception = new exception_1.Exception(203, 'test', 1);
            expect(exception.status).to.equal(203);
            expect(exception.toString()).to.equal('HttpException(203): test, innerException: 1');
        });
        it('should return empty message when message parameters is undefined', function () {
            var exception = new exception_1.Exception(203, undefined);
            expect(exception.status).to.equal(203);
            expect(exception.toString()).to.equal('HttpException(203):');
        });
    });
    describe('BadGateway', function () {
        it('should emit an exception', function () {
            try {
                throw new badgateway_1.BadGateway('message');
            }
            catch (err) {
                expect(err).to.be.an('object');
                expect(err instanceof exception_1.Exception).to.be.true;
                expect(err.status).to.equal(502);
                expect(err.toString()).to.equal('BAD_GATEWAY(502): message');
            }
        });
    });
    describe('BadRequest', function () {
        it('should emit an exception', function () {
            try {
                throw new badrequest_1.BadRequest('Parameters required [t1,t2]');
            }
            catch (err) {
                expect(err.status).to.equal(400);
                expect(err.toString()).to.equal('BAD_REQUEST(400): Parameters required [t1,t2]');
            }
        });
    });
    describe('Forbidden', function () {
        it('should emit an exception', function () {
            try {
                throw new forbidden_1.Forbidden('message');
            }
            catch (err) {
                expect(err.status).to.equal(403);
                expect(err.toString()).to.equal('FORBIDDEN(403): message');
            }
        });
    });
    describe('GatewayTimeout', function () {
        it('should emit an exception', function () {
            try {
                throw new gatewaytimeout_1.GatewayTimeout('message');
            }
            catch (err) {
                expect(err.status).to.equal(504);
            }
        });
    });
    describe('InternalServerError', function () {
        it('should emit an exception', function () {
            try {
                throw new internalservererror_1.InternalServerError('message');
            }
            catch (err) {
                expect(err.status).to.equal(500);
            }
        });
    });
    describe('MethodNotAllowed', function () {
        it('should emit an exception', function () {
            try {
                throw new methodnotallowed_1.MethodNotAllowed('message');
            }
            catch (err) {
                expect(err.status).to.equal(405);
            }
        });
    });
    describe('NotAcceptable', function () {
        it('should emit an exception', function () {
            try {
                throw new notacceptable_1.NotAcceptable('message');
            }
            catch (err) {
                expect(err.status).to.equal(406);
            }
        });
    });
    describe('NotFound', function () {
        it('should emit an  exception', function () {
            try {
                throw new notfound_1.NotFound('message');
            }
            catch (err) {
                expect(err.status).to.equal(404);
            }
        });
    });
    describe('NotImplemented', function () {
        it('should emit an exception', function () {
            try {
                throw new notimplemented_1.NotImplemented('message');
            }
            catch (err) {
                expect(err.status).to.equal(501);
            }
        });
    });
    describe('PaymentRequired', function () {
        it('should emit an exception', function () {
            try {
                throw new paymentrequired_1.PaymentRequired('message');
            }
            catch (err) {
                expect(err.status).to.equal(402);
            }
        });
    });
    describe('ProxyError', function () {
        it('should emit an exception', function () {
            try {
                throw new proxyerror_1.ProxyError('message');
            }
            catch (err) {
                expect(err.status).to.equal(502);
            }
        });
    });
    describe('ServiceUnvailable', function () {
        it('should emit an exception', function () {
            try {
                throw new serviceunvailable_1.ServiceUnvailable('message');
            }
            catch (err) {
                expect(err.status).to.equal(503);
            }
        });
    });
    describe('Unauthorized', function () {
        it('should emit an exception', function () {
            try {
                throw new unauthorized_1.Unauthorized('message');
            }
            catch (err) {
                expect(err.status).to.equal(401);
            }
        });
    });
});
//# sourceMappingURL=httpException.spec.js.map