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
                id: 'baseInfoTab',
                title: 'Базовая информация',
                type: 'form',
                meta: [
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
                        label: 'Комментарии',
                        technicalName: 'comments',
                        type: 'text',
                        required: false
                    }
                ]
            },
            {
                id: 'contactInfoTab',
                title: 'Контактная информация',
                type: 'table',
                meta: {
                    tableName: 'contact_info',
                    parentEntityName: 'client',
                    parentField: 'client_id',
                    columns: [
                        {
                            header: 'Тип',
                            accessor: 'type',
                            type: 'dictionary',
                            dictionaryName: 'contact_info_type'
                        },
                        {
                            header: 'Значение',
                            accessor: 'value',
                            type: 'string'
                        },
                        {
                            header: 'Статус',
                            accessor: 'status',
                            type: 'dictionary',
                            dictionaryName: 'contact_info_status'
                        },
                        {
                            header: 'Комментарии',
                            accessor: 'comments',
                            type: 'string'
                        }
                    ],
                    addRecord: {
                        fields: [{
                            label: 'Тип',
                            technicalName: 'type',
                            type: 'dictionary',
                            dictionaryName: 'contact_info_type',
                            required: true
                        },
                        {
                            label: 'Значение',
                            technicalName: 'value',
                            type: 'text',
                            required: true
                        },
                        {
                            label: 'Статус',
                            technicalName: 'status',
                            type: 'dictionary',
                            dictionaryName: 'contact_info_status',
                            required: true
                        },
                        {
                            label: 'Комментарии',
                            technicalName: 'comments',
                            type: 'text',
                            required: false
                        },
                        {
                            label: 'Клиент',
                            technicalName: 'client_id',
                            type: 'hidden',
                            predefault: 'parentId'
                        }]
                    }
                }
            },
            {
                id: 'addressTab',
                title: 'Адреса',
                type: 'table',
                meta: {
                    tableName: 'address',
                    parentEntityName: 'client',
                    parentField: 'client_id',
                    columns: [
                        {
                            header: 'Тип',
                            accessor: 'type',
                            type: 'dictionary',
                            dictionaryName: 'address_type'
                        },
                        {
                            header: 'Страна',
                            accessor: 'country',
                            type: 'dictionary',
                            dictionaryName: 'country'
                        },
                        {
                            header: 'Город',
                            accessor: 'city',
                            type: 'dictionary',
                            dictionaryName: 'city'
                        },
                        {
                            header: 'Адресная строка',
                            accessor: 'address_line',
                            type: 'string'
                        },
                        {
                            header: 'Статус',
                            accessor: 'status',
                            type: 'dictionary',
                            dictionaryName: 'address_status'
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
                id: 'projectsTab',
                title: 'Проекты',
                type: 'table',
                meta: {
                    tableName: 'dev_projects',
                    columns: [
                        {
                            header: 'Наименование',
                            accessor: 'name',
                            type: 'string'
                        }
                    ]
                }              
            }
        ]
    }
}
