export const ITEM_TYPE = 'ITEM';

export interface Board {
    counter: number;
    columnTitle: string;
    columnContent: [
        {
            itemTitle: string;
            itemDescription: string;
        }
    ];
}
