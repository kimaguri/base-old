import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { tableMeta, tabsMeta } from './meta.jsx'
import { useAuth } from '../../components/supabase-auth-provider/index.jsx'
import Tabs from '../../components/tabs/index.jsx'
import { Flex } from '@chakra-ui/react'

export const TimesheetPage = () => {
    const { user } = useAuth()

    const prepareAddData = (data) => {
        return { ...data, employee_id: user.id }
    }

    return (
        <Flex flexDirection="column">
            <Tabs meta={tabsMeta} />
            <Plate>
                <TableApplet meta={tableMeta} prepareAddData={prepareAddData} />
            </Plate>
        </Flex>
    )
}
