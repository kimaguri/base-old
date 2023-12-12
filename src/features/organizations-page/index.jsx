import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { fetchData } from '../../app/supabase.js'
import { useEffect, useState } from 'react'
import { meta } from './meta'

export const OrganizationsPage = () => {
    const [data, setData] = useState([])

    const handleFetch = () => {
        fetchData({ tableName: 'organization' }).then((data) => setData(data))
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <Plate>
            <TableApplet columns={meta} data={data} />
        </Plate>
    )
}
