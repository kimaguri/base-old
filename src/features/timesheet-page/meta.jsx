export const tableMeta = [
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
        type: 'date'
    },
    {
        header: 'Сотрудник',
        accessor: 'employee_id',
        type: 'string'
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
