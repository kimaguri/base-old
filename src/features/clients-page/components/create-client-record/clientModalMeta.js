export const clientModalMeta = [
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
        dictionaryName: 'fin_report_status',
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
