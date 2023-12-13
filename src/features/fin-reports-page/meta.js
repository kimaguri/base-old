export const meta = [
    {
        header: 'Наименование',
        accessor: 'name',
        type: 'string'
    },
    {
        header: 'Организация',
        accessor: 'organization.name',
        type: 'string'
    },
    {
        header: 'Год',
        accessor: 'year',
        type: 'string'
    },
    {
        header: 'Статус',
        accessor: 'status',
        type: 'dictionary',
        dictionaryName: 'fin_report_status'
    },
    {
        header: 'Комментарии',
        accessor: 'comments',
        type: 'string'
    }
]
