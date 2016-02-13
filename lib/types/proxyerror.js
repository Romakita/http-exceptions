"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exception_1 = require('../exception');
var CODE = 502;
var ProxyError = (function (_super) {
    __extends(ProxyError, _super);
    function ProxyError(message) {
        _super.call(this, CODE, message);
        this.name = 'PROXY_ERROR';
        this.status = CODE;
    }
    return ProxyError;
}(exception_1.Exception));
exports.ProxyError = ProxyError;
//# sourceMappingURL=proxyerror.js.map