var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HTTPException = require('../http-exception');
var CODE = 500;
var InternalServerError = (function (_super) {
    __extends(InternalServerError, _super);
    function InternalServerError(message) {
        _super.call(this, CODE, message);
        this.name = 'INTERNAL_SERVER_ERROR';
        this.status = CODE;
    }
    return InternalServerError;
})(HTTPException);
module.exports = InternalServerError;
//# sourceMappingURL=internalservererror.js.map