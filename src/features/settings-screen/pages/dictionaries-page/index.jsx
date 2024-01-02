import { TableApplet } from '../../../../components/table-applet/index.jsx'
import Plate from '../../../../components/plate/index.jsx'
import { meta } from './meta.js'

export const DictionariesPage = () => {
    return (
        <Plate>
            <TableApplet meta={meta} />
        </Plate>
    )
}
