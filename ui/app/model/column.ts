import { StickerSelection } from './stickerSelection';

export enum columnFill { 'empty' = 0, 'oneFourth' = 1, 'half' = 2, 'threeFourths' = 3, 'full' = 4 }

export class Column {
    public position: Number;
    public quantity: columnFill = columnFill.empty;
    public stickers: StickerSelection;
}