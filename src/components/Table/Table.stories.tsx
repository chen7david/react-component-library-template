import { Table } from './Table'

export default {
    title: 'Blaze/Table',
    component: Table
}

export const Default = {
    args: {
        items: [
            {
                name: 'John',
                age: 32
            },
            {
                name: 'Jane',
                age: 42
            },
        ],
        columns: [
            {
                title: 'name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'age',
                dataIndex: 'age',
                key: 'age',
            }
        ]
    }
}