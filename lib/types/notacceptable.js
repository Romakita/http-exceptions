var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HTTPException = require('../http-exception');
var CODE = 406;
var NotAcceptable = (function (_super) {
    __extends(NotAcceptable, _super);
    function NotAcceptable(message) {
        _super.call(this, CODE, "You must accept content-type " + message);
        this.name = 'NOT_ACCEPTABLE';
        this.status = CODE;
    }
    return NotAcceptable;
})(HTTPException);
module.exports = NotAcceptable;
//# sourceMappingURL=notacceptable.js.map