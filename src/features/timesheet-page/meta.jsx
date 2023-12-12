export const tableMeta = [
    {
        accessor: 'id',
        type: 'string',
        visible: false
    },
    {
        header: 'Проект',
        accessor: 'project_id',
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
        type: 'date'
    }
]

export const tabsMeta = [
    {
        id: 'my_timesheets',
        title: 'Мои табели'
    },
    {
        id: 'all_timesheets',
        title: 'Все табели'
    }
]
