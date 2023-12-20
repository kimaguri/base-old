import { TableApplet } from '../../components/table-applet/index.jsx'
import Plate from '../../components/plate/index.jsx'
import { meta } from './meta'

export const ProjectsPage = () => {
    const data = [
        {
            id: 'Alice',
            projectCode: 'Smith',
            type: '10.03.1998',
            subType: 'Ж',
            empId: '',
            hours: '',
            date: ''
        },
        {
            id: 'Alice',
            projectCode: 'Smith',
            type: '10.03.1998',
            subType: 'Ж',
            empId: '',
            hours: '',
            date: ''
        },
        {
            id: 'Alice',
            projectCode: 'Smith',
            type: '10.03.1998',
            subType: 'Ж',
            empId: '',
            hours: '',
            date: ''
        },
        {
            id: 'Alice',
            projectCode: 'Smith',
            type: '10.03.1998',
            subType: 'Ж',
            empId: '',
            hours: '',
            date: ''
        },
        {
            id: 'Alice',
            projectCode: 'Smith',
            type: '10.03.1998',
            subType: 'Ж',
            empId: '',
            hours: '',
            date: ''
        },
        {
            id: 'Alice',
            projectCode: 'Smith',
            type: '10.03.1998',
            subType: 'Ж',
            empId: '',
            hours: '',
            date: ''
        },
        {
            id: 'Alice',
            projectCode: 'Smith',
            type: '10.03.1998',
            subType: 'Ж',
            empId: '',
            hours: '',
            date: ''
        }
    ]

    return (
        <Plate>
            <TableApplet meta={meta} />
        </Plate>
    )
}
