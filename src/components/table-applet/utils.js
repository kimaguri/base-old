import { createColumnHelper } from '@tanstack/react-table'
import { formatDate } from '../../utils/index.js'

const columnHelper = createColumnHelper()

export const createColumns = (columns) => {
    return columns
        .filter((column) => column.visible !== false)
        .map((col) =>
            columnHelper.accessor(col.accessor, {
                header: col.header,
                type: col.type,
                cell: (info) =>
                    col.type === 'date'
                        ? formatDate({ dateString: info.getValue() })
                        : info.getValue()
            })
        )
}
