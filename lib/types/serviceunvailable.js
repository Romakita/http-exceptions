var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HTTPException = require('../http-exception');
var CODE = 503;
var ServiceUnvailable = (function (_super) {
    __extends(ServiceUnvailable, _super);
    function ServiceUnvailable(message) {
        _super.call(this, CODE, message);
        this.name = 'SERVICE_UNVAILABLE';
        this.status = CODE;
    }
    return ServiceUnvailable;
})(HTTPException);
module.exports = ServiceUnvailable;
//# sourceMappingURL=serviceunvailable.js.map