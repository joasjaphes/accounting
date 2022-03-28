export interface TableConfiguration {
    tableColumns: TableColumn[];
    actionIcons?: { [key: string]: boolean; };
}

export interface TableColumn {
    name: string;
    label: string;
    type?: string;
    headerAlign?: string;
    dataAlign?: string;
}