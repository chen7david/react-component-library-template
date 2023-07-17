import React from 'react'
import { Table as AntTable, TabPaneProps} from 'antd'

export interface IColumns {
    title: string,
    dataIndex: string,
    key: string,

}

export interface ITableProps<T> {
    items: T[]
    columns: IColumns[]
}

export function Table<T extends {}>(props: ITableProps<T>) {
    return (
        <AntTable columns={props.columns} dataSource={props.items} />
    )
}