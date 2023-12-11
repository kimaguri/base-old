import { format, parseISO } from 'date-fns'

export const handleAsyncThunkStates = (thunk) => (action) => {
    return action.type.startsWith(thunk.typePrefix)
}

export const formatDate = ({ dateString, formatString = 'dd.MM.yyyy HH:mm' }) => {
    const date = parseISO(dateString)

    return format(date, formatString)
}
