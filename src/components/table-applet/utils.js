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

export const prepareAddData = (newRecordData, addRecordColumns, context) => {
    const addData = predefaultData(newRecordData, addRecordColumns, context)
    const addRecordOptSelects = addRecordColumns
        .filter((item) => item.type === 'select' && !item.required)
        .map((item) => item.technicalName)
    addRecordOptSelects.forEach((item) => addData[item] = addData[item] || null)

    return addData
}

export const prepareEditData = (editRecordData, editRecordColumns) => {
    const editData = { ...editRecordData }
    const editRecordOptSelects = editRecordColumns
        .filter((item) => item.type === 'select' && !item.required)
        .map((item) => item.technicalName)
    editRecordOptSelects.forEach((item) => editData[item] = editData[item] || null)

    return editData
}

export const predefaultData = (addData, columns, context) => {
    const resultData = { ...addData }
    const columnsWithPredefault = columns.filter((item) => !!item.predefault)
    columnsWithPredefault.forEach((item) => {
        switch (item.predefault) {
            case 'userId':
                const userId = context.user.id
                resultData[item.technicalName] = userId
            default:
        }
    })
    
    return resultData
}
