import { TableApplet } from '../../components/table-applet/index.jsx'

export const tableMeta = {
    tableName: 'timesheet',
    foreignTables: ['dev_projects'],
    columns: [
        {
            accessor: 'id',
            type: 'string',
            visible: false
        },
        {
            header: 'Проект',
            accessor: 'dev_projects.name',
            type: 'string'
        },
        {
            header: 'Часы',
            accessor: 'hours_amount',
            type: 'string'
        },
        {
            header: 'Дата',
            accessor: 'created_at',
            type: 'datetime'
        },
        {
            header: 'Сотрудник',
            accessor: 'employee_id',
            type: 'string'
        }
    ],
    addRecord: {
        title: 'Новый табель',
        fields: [
            {
                label: 'Дата',
                technicalName: 'issue_date',
                type: 'date',
                required: true
            },
            {
                label: 'Проект',
                technicalName: 'project_id',
                type: 'select',
                source: 'dev_projects',
                required: true
            },
            {
                label: 'Часы',
                technicalName: 'hours_amount',
                type: 'text',
                required: true
            }
        ]
    },
    editRecord: {
        title: 'Новый табель',
        fields: [
            {
                label: 'Дата',
                technicalName: 'issue_date',
                type: 'date',
                required: true
            },
            {
                label: 'Проект',
                technicalName: 'project_id',
                type: 'select',
                source: 'dev_projects',
                required: true
            },
            {
                label: 'Часы',
                technicalName: 'hours_amount',
                type: 'text',
                required: true
            }
        ]
    }
}

export const tabsMeta = [
    {
        id: 'my_timesheets',
        title: 'Мои табели',
        component: <TableApplet meta={tableMeta} />
    },
    {
        id: 'all_timesheets',
        title: 'Все табели',
        component: <TableApplet meta={tableMeta} />
    }
]
