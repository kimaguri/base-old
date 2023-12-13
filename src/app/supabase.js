import { supabase } from '../components/supabase-auth-provider/index.jsx'

export const fetchData = async ({ tableName, foreignTables, filter, order }) => {
    const { data, error } = await supabase
        .from(tableName)
        .select(`
            *
            ${foreignTables
                ? foreignTables.map((item) => `,${item}(*)`)
                : ''
            }
        `)
        .filter(filter?.column || '', filter?.operator || '', filter?.value || '')
        .order(order?.column || 'created_at', { ascending: order?.ascending || false })

    if (error) {
        console.error('Error fetching data:', error)

        return
    }

    return data
}

export const insertRecord = async ({ tableName, recordData }) => {
    const { data, error } = await supabase.from(tableName).insert(recordData)

    if (error) {
        console.error('Error fetching data:', error)

        return
    }

    return data
}
