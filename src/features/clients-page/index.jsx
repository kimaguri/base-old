import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { fetchData, insertRecord } from '../../app/supabase.js'
import { useEffect, useState } from 'react'
import { meta } from './meta'
import { ClientRecordModal } from './components/create-client-record/index.jsx'

export const ClientsPage = () => {
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const handleFetch = () => {
        fetchData({ tableName: 'client' }).then((data) => setData(data))
    }
    const handleSubmit = (data) => {
        const clearedData = {// TODO_TEMP костыль для замены "" на null для uuid полей
            ...data,
            manager_id: !data.manager_id ? null : data.manager_id
        }
        insertRecord({ tableName: 'client', recordData: clearedData }).then(handleFetch)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <Plate>
            <TableApplet columns={meta} data={data} onAddRecord={() => setIsOpen(true)} />
            <ClientRecordModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} />
        </Plate>
    )
}
