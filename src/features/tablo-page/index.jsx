import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { meta } from './meta'
import { fetchData, insertRecord } from '../../app/supabase.js'
import { useEffect, useState } from 'react'
import MyModal from './components/create-timesheet-record/index.jsx'

export const TabloPage = () => {
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const handleFetch = () => {
        fetchData({ tableName: 'timesheet' }).then((data) => setData(data))
    }
    const handleSubmit = (data) => {
        insertRecord({ tableName: 'timesheet', recordData: data }).then(handleFetch)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <Plate>
            <TableApplet columns={meta} data={data} onAddRecord={() => setIsOpen(true)} />
            <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} />
        </Plate>
    )
}
