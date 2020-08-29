import { DropTargetMonitor } from 'react-dnd';

export const ITEM_TYPE = 'ITEM';
export const COLUMN_TYPE = 'COLUMN';

export interface Item {
    itemTitle: string;
    itemDescription: string;
    columnId: number;
}

export interface Column {
    columnId: number;
    columnTitle: string;
}

export interface ColumnWrapperProps {
    // onDropColumn: (item: any, monitor: DropTargetMonitor, columnId: number) => void;
    columns: Column[];
    updateColumn: (data: MoveItProps) => void;
}

export interface ItemsWrapperProps {
    onDropItem: (
        item: any,
        monitor: DropTargetMonitor,
        columnId: number
    ) => void;
    columnId: number;
    items: Item[];
    updateItem: (data: MoveItProps) => void;
}

export interface MoveItProps {
    dragIndex?: number;
    hoverIndex?: number;
    item?: any;
}

export interface BaseColumnItemProps {
    index: number;
    moveIt: (dragIndex: number, hoverIndex: number, item?: any) => void;
}

export interface ColumnProps extends BaseColumnItemProps {
    isOver: boolean;
    column: Column;
    columns: Column[];
    updateItemColumn: (data: ItemReducer) => void;
}

export interface ItemProps extends BaseColumnItemProps {
    item: Item;
    columnId: number;
}

export interface DragItem extends Item {
    index: number;
    type: string;
}

export interface ColumnItem extends DragItem {}

export interface WindowProps {
    show: boolean;
    onClose: () => void;
    item: Item;
}

export interface ItemReducer {
    idx?: number;
    newColumnId?: number;
    itemTitle?: string;
    itemDescription?: string;
    columnId?: number;
    item?: Item;
    dragIndex?: number;
    hoverIndex?: number;
}

export interface ModalProps {
    modal: {
        itemTitle: string;
        itemDescription: string;
        columnId: number;
        index: number;
    };
    modalClose: () => void;
    updateIme: (data: ItemReducer) => void;
}
