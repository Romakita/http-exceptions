var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HTTPException = require('../http-exception');
var CODE = 502;
var BadGateway = (function (_super) {
    __extends(BadGateway, _super);
    function BadGateway(message) {
        _super.call(this, CODE, message);
        this.name = 'BAD_GATEWAY';
        this.status = CODE;
    }
    return BadGateway;
})(HTTPException);
module.exports = BadGateway;
//# sourceMappingURL=badgateway.js.map