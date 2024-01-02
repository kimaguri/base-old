import { supabase } from '../components/supabase-auth-provider/index.jsx'

export const fetchData = async ({ tableName, foreignTables = [], filter, order }) => {
    let selectQuery = '*'

    if (foreignTables.length > 0) {
        const foreignTablesQuery = foreignTables.map((table) => `${table}(*)`).join(',')
        selectQuery = `*, ${foreignTablesQuery}`
    }

    const { data, error } = await supabase
        .from(tableName)
        .select(selectQuery)
        .filter(filter?.column || '', filter?.operator || '', filter?.value || '')
        .order(order?.column || 'created_at', { ascending: order?.ascending || false })

    if (error) {
        console.error('Error fetching data:', error)

        return
    }

    return data
}

export const fetchPaginatedData = async ({
    tableName,
    foreignTables = [],
    filter,
    order,
    pageIndex = 0,
    pageSize = 10
}) => {
    let selectQuery = '*'

    if (foreignTables.length > 0) {
        const foreignTablesQuery = foreignTables.map((table) => `${table}(*)`).join(',')
        selectQuery = `*, ${foreignTablesQuery}`
    }

    const startIndex = pageIndex * pageSize
    const endIndex = startIndex + pageSize - 1

    const { data, error, count } = await supabase
        .from(tableName)
        .select(selectQuery, { count: 'exact' })
        .range(startIndex, endIndex)
        .filter(filter?.column || '', filter?.operator || '', filter?.value || '')
        .order(order?.column || 'created_at', { ascending: order?.ascending || false })

    if (error) {
        console.error('Error fetching data:', error)

        return { data: null, error, count: 0 }
    }

    return { data, count }
}

export const insertRecord = async ({ tableName, recordData }) => {
    const { data, error } = await supabase.from(tableName).insert(recordData)

    if (error) {
        console.error('Error inserting data:', error)

        return
    }

    return data
}

export const modifyRecord = async ({ tableName, recordData, recordId }) => {
    const { error } = await supabase.from(tableName).update(recordData).eq('id', recordId)

    if (error) {
        console.error('Error modifing data:', error)
    }
}

export const deleteRecord = async ({ tableName, recordId }) => {
    const { error } = await supabase.from(tableName).delete().eq('id', recordId)

    if (error) {
        console.error('Error deleting data:', error)
    }
}
