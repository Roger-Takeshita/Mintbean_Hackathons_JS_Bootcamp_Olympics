export const ITEM_TYPE = 'ITEM';

export interface Board {
    columnTitle: string;
    columnContent: [
        {
            itemTitle: string;
            itemDescription: string;
        }
    ];
}
