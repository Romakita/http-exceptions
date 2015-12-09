var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HTTPException = require('../http-exception');
var CODE = 402;
var PaymentRequired = (function (_super) {
    __extends(PaymentRequired, _super);
    function PaymentRequired(message) {
        _super.call(this, CODE, message);
        this.name = 'PAYMENT_REQUIRED';
        this.status = CODE;
    }
    return PaymentRequired;
})(HTTPException);
module.exports = PaymentRequired;
//# sourceMappingURL=paymentrequired.js.map