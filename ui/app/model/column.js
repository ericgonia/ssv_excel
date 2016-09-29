"use strict";
(function (columnFill) {
    columnFill[columnFill['empty'] = 0] = 'empty';
    columnFill[columnFill['oneFourth'] = 1] = 'oneFourth';
    columnFill[columnFill['half'] = 2] = 'half';
    columnFill[columnFill['threeFourths'] = 3] = 'threeFourths';
    columnFill[columnFill['full'] = 4] = 'full';
})(exports.columnFill || (exports.columnFill = {}));
var columnFill = exports.columnFill;
var Column = (function () {
    function Column() {
        this.quantity = columnFill.empty;
    }
    return Column;
}());
exports.Column = Column;
//# sourceMappingURL=column.js.map