import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { meta } from './meta'

export const ObjectsPage = () => {
    const data = [
        {
            firstName: 'Alice',
            lastName: 'Smith',
            birthDate: '10.03.1998',
            sex: 'Ж'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '22.05.1988',
            sex: 'М'
        }
    ]

    return (
        <Plate>
            <TableApplet columns={meta} data={data} />
        </Plate>
    )
}
