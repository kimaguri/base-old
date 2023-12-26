import { TableApplet } from '../../components/table-applet/index.jsx'

export const tableMeta = {
    tableName: 'dev_projects',
    columns: [
        {
            accessor: 'id',
            type: 'string',
            visible: false
        },
        {
            header: 'Проект',
            accessor: 'name',
            type: 'string'
        }
    ],
    addRecord: {
        title: 'Новый проект',
        fields: [
            {
                label: 'Проект',
                technicalName: 'name',
                type: 'string',
                required: true
            }
        ]
    },
    editRecord: {
        title: 'Редактирование проекта',
        fields: [
            {
                label: 'Проект',
                technicalName: 'name',
                type: 'string',
                required: true
            }
        ]
    }
}

export const tabsMeta = [
    {
        id: 'my_projects',
        title: 'Мои проекты',
        component: <TableApplet meta={tableMeta} />
    },
    {
        id: 'all_projects',
        title: 'Все проекты',
        component: <TableApplet meta={tableMeta} />
    }
]
