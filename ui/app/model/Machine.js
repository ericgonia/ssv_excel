"use strict";
var column_1 = require('./column');
(function (machineType) {
    machineType[machineType['fourColumn'] = 0] = 'fourColumn';
    machineType[machineType['eightColumn'] = 1] = 'eightColumn';
})(exports.machineType || (exports.machineType = {}));
var machineType = exports.machineType;
var Machine = (function () {
    function Machine(type) {
        if (type === void 0) { type = machineType.eightColumn; }
        this.type = type;
        this.columns = [];
        var count = 4;
        if (type === machineType.eightColumn) {
            count = 8;
        }
        for (var i = 0; i < count; i++) {
            var column = new column_1.Column();
            column.position = i + 1;
            this.columns.push(column);
        }
    }
    return Machine;
}());
exports.Machine = Machine;
//# sourceMappingURL=Machine.js.map