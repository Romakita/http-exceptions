var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HTTPException = require('../http-exception');
var CODE = 400;
var BadRequest = (function (_super) {
    __extends(BadRequest, _super);
    function BadRequest(message) {
        _super.call(this, CODE, message);
        this.name = 'BAD_REQUEST';
        this.status = CODE;
    }
    return BadRequest;
})(HTTPException);
module.exports = BadRequest;
//# sourceMappingURL=badrequest.js.map