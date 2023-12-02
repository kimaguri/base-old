import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper()

export const createColumns = (columns) => {
    return columns.map((col) =>
        columnHelper.accessor(col.accessor, {
            header: col.header,
            type: col.type,
            cell: (info) => info.getValue()
        })
    )
}
