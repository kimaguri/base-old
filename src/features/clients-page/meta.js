export const meta = [
    {
        header: 'Клиент',
        accessor: 'full_name',
        type: 'string'
    },
    {
        header: 'Тип',
        accessor: 'type',
        type: 'dictionary',
        dictionaryName: 'client_type'
    },
    {
        header: 'Дата рождения',
        accessor: 'birth_date',
        type: 'date'
    },
    {
        header: 'ИИН/БИН',
        accessor: 'iin_bin',
        type: 'string'
    },
    {
        header: 'Статус',
        accessor: 'status',
        type: 'dictionary',
        dictionaryName: 'client_status'
    },
    {
        header: 'Комментарии',
        accessor: 'comments',
        type: 'string'
    }
]
