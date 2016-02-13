"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exception_1 = require('../exception');
var CODE = 502;
var BadGateway = (function (_super) {
    __extends(BadGateway, _super);
    function BadGateway(message) {
        _super.call(this, CODE, message);
        this.name = 'BAD_GATEWAY';
        this.status = CODE;
    }
    return BadGateway;
}(exception_1.Exception));
exports.BadGateway = BadGateway;
//# sourceMappingURL=badgateway.js.map