import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { fetchData, insertRecord } from '../../app/supabase.js'
import { useEffect, useState } from 'react'
import { meta } from './meta'
import MyModal from './components/create-fin-report-record/index.jsx'

export const FinReportsPage = () => {
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const handleFetch = () => {
        fetchData({ tableName: 'fin_report', foreignTables: ['organization'] }).then((data) => setData(data))
    }
    const handleSubmit = (data) => {
        insertRecord({ tableName: 'fin_report', recordData: data }).then(handleFetch)
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
