export const meta = {
    tableName: 'client',
    columns: [
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
    ],
    addRecord: {
        title: 'Новый клиент',
        fields: [
            {
                label: 'ФИО/Название компании',
                technicalName: 'full_name',
                type: 'text',
                required: true
            },
            {
                label: 'Тип клиента',
                technicalName: 'type',
                type: 'dictionary',
                dictionaryName: 'client_type',
                required: true
            },
            {
                label: 'Дата рождения',
                technicalName: 'birth_date',
                type: 'date',
                required: false
            },
            {
                label: 'ИИН/БИН',
                technicalName: 'iin_bin',
                type: 'text',
                required: false
            },
            {
                label: 'Статус',
                technicalName: 'status',
                type: 'dictionary',
                dictionaryName: 'client_status',
                required: true
            },
            {
                label: 'Клиент с',
                technicalName: 'client_from_date',
                type: 'date',
                required: false
            },
            {
                label: 'Ответственный',
                technicalName: 'manager_id',
                type: 'select',
                source: 'organization',
                required: false
            },
            {
                label: 'Комментарии',
                technicalName: 'comments',
                type: 'text',
                required: false
            }
        ]
    },
    editRecord: {
        title: 'Новый клиент',
        fields: [
            {
                label: 'ФИО/Название компании',
                technicalName: 'full_name',
                type: 'text',
                required: true
            },
            {
                label: 'Тип клиента',
                technicalName: 'type',
                type: 'dictionary',
                dictionaryName: 'client_type',
                required: true
            },
            {
                label: 'Дата рождения',
                technicalName: 'birth_date',
                type: 'date',
                required: false
            },
            {
                label: 'ИИН/БИН',
                technicalName: 'iin_bin',
                type: 'text',
                required: false
            },
            {
                label: 'Статус',
                technicalName: 'status',
                type: 'dictionary',
                dictionaryName: 'client_status',
                required: true
            },
            {
                label: 'Клиент с',
                technicalName: 'client_from_date',
                type: 'date',
                required: false
            },
            {
                label: 'Ответственный',
                technicalName: 'manager_id',
                type: 'select',
                source: 'organization',
                required: false
            },
            {
                label: 'Комментарии',
                technicalName: 'comments',
                type: 'text',
                required: false
            }
        ]
    }
}
