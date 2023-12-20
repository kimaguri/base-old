import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { meta } from './meta'

export const ClientsPage = () => {
    const prepareAddData = (data) => {
        const clearedData = {// TODO_TEMP костыль для замены "" на null для uuid полей
            ...data,
            manager_id: !data.manager_id ? null : data.manager_id
        }
        return clearedData
    }

    return (
        <Plate>
            <TableApplet
                meta={meta}
                prepareAddData={prepareAddData}
            />
        </Plate>
    )
}
