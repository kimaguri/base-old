export const meta = {
    tableName: 'client',
    columns: [
        {
            header: 'Клиент',
            accessor: 'full_name',
            type: 'drilldown'
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
    },
    drilldown: {
        titleField: 'full_name',
        type: 'tabs',
        meta: [
            {
                id: 'lovTab',
                title: 'Справочники',
                type: 'table',
                meta: {
                    tableName: 'dictionary',
                    columns: [
                        {
                            header: 'Наименование',
                            accessor: 'name',
                            type: 'string'
                        },
                        {
                            header: 'Код',
                            accessor: 'code',
                            type: 'string'
                        },
                        {
                            header: 'Значения',
                            accessor: 'values_json',
                            type: 'json'
                        },
                        {
                            header: 'Комментарии',
                            accessor: 'comments',
                            type: 'string'
                        }
                    ]
                }
            },
            {
                id: 'orgTab',
                title: 'Организации',
                type: 'table',
                meta: {
                    tableName: 'organization',
                    columns: [
                        {
                            header: 'Наименование',
                            accessor: 'name',
                            type: 'string'
                        },
                        {
                            header: 'Комментарии',
                            accessor: 'comments',
                            type: 'string'
                        }
                    ],
                    addRecord: {
                        fields: [{
                            label: 'Наименование',
                            technicalName: 'name',
                            type: 'text',
                            required: true
                        },
                        {
                            label: 'Комментарии',
                            technicalName: 'comments',
                            type: 'text',
                            required: false
                        }]
                    },
                    editRecord: {
                        fields: [{
                            label: 'Наименование',
                            technicalName: 'name',
                            type: 'text',
                            required: true
                        },
                        {
                            label: 'Комментарии',
                            technicalName: 'comments',
                            type: 'text',
                            required: false
                        }]
                    }
                }              
            }
        ]
    }
}
