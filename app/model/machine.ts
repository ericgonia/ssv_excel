import { Column } from './column';

export enum machineType { 'fourColumn' = 0, 'eightColumn' = 1 }

export class Machine {
    constructor(public type: machineType = machineType.eightColumn) {
        var count = 4;
        if (type === machineType.eightColumn) {
            count = 8;
        }

        for (var i = 0; i < count; i++) {
            var column = new Column();
            column.position = i + 1;
            this.columns.push(column);
        }

    }

    public school: String;
    public columns: Column[] = [];
}