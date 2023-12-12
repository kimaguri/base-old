import { supabase } from '../components/supabase-auth-provider/index.jsx'

export const fetchData = async ({ tableName, foreignTables }) => {
    const { data, error } = await supabase.from(tableName).select(`
        *
        ${foreignTables
            ? foreignTables.map((item) => `,${item}(*)`)
            : ''
        }
    `)

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
