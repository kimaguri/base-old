import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { meta } from './meta'

export const FinReportsPage = () => {
    return (
        <Plate>
            <TableApplet meta={meta} />
        </Plate>
    )
}
