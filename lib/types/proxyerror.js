var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HTTPException = require('../http-exception');
var CODE = 502;
var ProxyError = (function (_super) {
    __extends(ProxyError, _super);
    function ProxyError(message) {
        _super.call(this, CODE, message);
        this.name = 'PROXY_ERROR';
        this.status = CODE;
    }
    return ProxyError;
})(HTTPException);
module.exports = ProxyError;
//# sourceMappingURL=proxyerror.js.map