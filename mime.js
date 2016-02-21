var notacceptable_1 = require("./lib/notacceptable");
function mime(list) {
    if (typeof list == 'string') {
        list = [list];
    }
    return function (req, res, next) {
        for (var i = 0; i < list.length; i++) {
            if (!req.accepts(list[0])) {
                throw new notacceptable_1.NotAcceptable(list[0]);
            }
        }
        next();
    };
}
exports.mime = mime;
//# sourceMappingURL=mime.js.map