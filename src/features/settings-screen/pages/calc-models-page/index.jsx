import { TableApplet } from '../../../../components/table-applet/index.jsx'
import Plate from '../../../../components/plate/index.jsx'
import { meta } from './meta.js'

export const CalcModelsPage = () => {
    return (
        <Plate>
            <TableApplet meta={meta} />
        </Plate>
    )
}
