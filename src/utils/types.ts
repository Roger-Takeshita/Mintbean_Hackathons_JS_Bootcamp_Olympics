import { DropTargetMonitor } from "react-dnd";

export const ITEM_TYPE = 'ITEM';
export const COLUMN_TYPE = 'COLUMN';

export interface Item {
    itemTitle: string;
    itemDescription: string;
    columnId: number;
};

export interface Column {
    columnId: number,
    columnTitle: string;
};

export interface ColumnWrapperProps extends React.Component {
    onDropColumn: (item: any, monitor: DropTargetMonitor, columnId: number) => void;
};

export interface ItemsWrapperProps {
    onDropItem: (item: any, monitor: DropTargetMonitor, columnId: number) => void;
    columnId: number;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
    boardItems: Item[]
};

export interface BaseColumnItemProps {
    index: number;
    moveIt: (dragIndex: number, hoverIndex: number) => void;
}

export interface ColumnProps extends BaseColumnItemProps {
    isOver: boolean;
    column: Column;
};

export interface ItemProps extends BaseColumnItemProps {
    item: Item;
    columnId: number;
};

export interface DragItem extends Item {
    index: number;
    type: string;
};

export interface ColumnItem extends DragItem { };

export interface WindowProps {
    show: boolean;
    onClose: () => void;
    item: Item;
}