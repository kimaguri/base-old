import { createColumnHelper } from '@tanstack/react-table'
import {
    formatDate,
    getDictionaryDisplayValue,
    dictionarySorter,
    RUS_DATE,
    RUS_DATETIME
} from '../../utils/index.js'

const columnHelper = createColumnHelper()

export const createColumns = (columns, lovs) => {
    return columns
        .filter((column) => column.visible !== false)
        .map((col) =>
            columnHelper.accessor(col.accessor, {
                header: col.header,
                type: col.type,
                cell: (info) => {
                    switch (col.type) {
                        case 'date':
                            return formatDate({ dateString: info.getValue(), formatString: RUS_DATE })
                        case 'datetime':
                            return formatDate({ dateString: info.getValue(), formatString: RUS_DATETIME })
                        case 'dictionary':
                            return getDictionaryDisplayValue({
                                dictionaryName: col.dictionaryName,
                                lovs,
                                name: info.getValue()
                            })
                        case 'json':
                            const value = info.getValue()
                            const jsonValue = Array.isArray(value)
                                ? value
                                    .filter((item) => !item.inactive)
                                    .sort(dictionarySorter)
                                    .map((item) => item.value)
                                    .join('; ')
                                : JSON.stringify(value)
                            return jsonValue
                        default:
                            return info.getValue()
                    }
                }
            })
        )
}
