import { DropTargetMonitor } from 'react-dnd';

export const ITEM_TYPE = 'ITEM';
export const COLUMN_TYPE = 'COLUMN';

export interface Item {
    itemId: string;
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
    modalOpen: (data: ItemReducer) => void;
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
    mode?: string;
    itemId?: string;
}

export interface ItemMenuProps {
    item: Item;
    items: Item[];
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    deleteItem: (idx: ItemReducer) => void;
    modalOpen: (data: ItemReducer) => void;
}

export interface MoveItemsProps {
    item: any;
    items?: Item[];
    columns?: Column[];
    updateItemColumn: (data: ItemReducer) => void;
    setShowMoveItem: React.Dispatch<React.SetStateAction<boolean>>;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalProps {
    modal: {
        itemTitle: string;
        itemDescription: string;
        columnId: number;
        index: number;
        mode?: string;
    };
    // mode?: string;
    modalClose: () => void;
    addItem?: (data: ItemReducer) => void;
    updateItemInfo?: (data: ItemReducer) => void;
    addColumn?: (data: string) => void;
    updateColumnInfo?: (data: string) => void;
}
