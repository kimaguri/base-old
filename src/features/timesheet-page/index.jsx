import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { tableMeta, tabsMeta } from './meta.jsx'
import { fetchData, insertRecord } from '../../app/supabase.js'
import { useEffect, useState } from 'react'
import { AddTimesheetRecordModal } from './components/add-timesheet-record-modal/index.jsx'
import { useAuth } from '../../components/supabase-auth-provider/index.jsx'
import Tabs from '../../components/tabs/index.jsx'
import { Flex } from '@chakra-ui/react'

export const TimesheetPage = () => {
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useAuth()

    const handleFetch = () => {
        fetchData({ tableName: 'timesheet', foreignTables: ['dev_projects'] }).then((data) =>
            setData(data)
        )
    }

    const handleSubmit = (data) => {
        insertRecord({
            tableName: 'timesheet',
            recordData: { ...data, employee_id: user.id }
        }).then(handleFetch)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <Flex flexDirection="column">
            <Tabs meta={tabsMeta} />
            <Plate>
                <TableApplet columns={tableMeta} data={data} onAddRecord={() => setIsOpen(true)} />
                <AddTimesheetRecordModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    onSubmit={handleSubmit}
                />
            </Plate>
        </Flex>
    )
}
