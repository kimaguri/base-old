import { format, parseISO } from 'date-fns'

export const RUS_DATETIME = 'dd.MM.yyyy HH:mm'
export const RUS_DATE = 'dd.MM.yyyy'

export const handleAsyncThunkStates = (thunk) => (action) => {
    return action.type.startsWith(thunk.typePrefix)
}

export const formatDate = ({ dateString, formatString = RUS_DATETIME }) => {
    if (!dateString)
        return ''

    const date = parseISO(dateString)

    return format(date, formatString)
}

export const getDictionaryDisplayValue = ({ dictionaryName, lovs, name }) => {
    return lovs?.[dictionaryName]?.find((item) => item.name === name)?.value || name
}

export const dictionarySorter = (a, b) => a.order && b.order ? a.order - b.order : 0
