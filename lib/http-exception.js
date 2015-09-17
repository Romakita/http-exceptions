var HTTPException = (function () {
    function HTTPException(status, message, innerException) {
        this.name = 'HttpException';
        this.type = 'HTTP_EXCEPTION';
        // Guard against throw Exception(...) usage.
        if (!(this instanceof HTTPException))
            return new HTTPException(status, message, innerException);
        Error.apply(this, arguments);
        if (typeof Error.captureStackTrace === 'function') {
            //noinspection JSUnresolvedFunction
            Error.captureStackTrace(this, arguments.callee);
        }
        this.status = status;
        this.message = message || '';
        if (innerException) {
            if (innerException instanceof Error) {
                this.innerException = innerException;
                this.message = this.message + ", innerException: " + this.innerException.message;
            }
            else if (typeof innerException === "string") {
                this.innerException = new Error(innerException);
                this.message = this.message + ", innerException: " + this.innerException.message;
            }
            else {
                this.innerException = innerException;
                this.message = this.message + ", innerException: " + this.innerException;
            }
        }
    }
    return HTTPException;
})();
module.exports = HTTPException;
//# sourceMappingURL=http-exception.js.map