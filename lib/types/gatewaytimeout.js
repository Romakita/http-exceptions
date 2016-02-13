"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _exception_1 = require('../_exception');
var CODE = 504;
var GatewayTimeout = (function (_super) {
    __extends(GatewayTimeout, _super);
    function GatewayTimeout(message) {
        _super.call(this, CODE, message);
        this.name = 'GATEWAY_TIMEOUT';
        this.status = CODE;
    }
    return GatewayTimeout;
}(_exception_1.Exception));
exports.GatewayTimeout = GatewayTimeout;
//# sourceMappingURL=gatewaytimeout.js.map