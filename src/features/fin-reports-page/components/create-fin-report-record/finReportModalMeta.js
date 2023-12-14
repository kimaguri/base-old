export const finReportModalMeta = [
    {
        label: 'Организация',
        technicalName: 'organization_id',
        type: 'select',
        source: 'organization',
        required: true
    },
    {
        label: 'Наименование',
        technicalName: 'name',
        type: 'text',
        required: true
    },
    {
        label: 'Год',
        technicalName: 'year',
        type: 'text',
        required: true
    },
    {
        label: 'Статус',
        technicalName: 'status',
        type: 'dictionary',
        dictionaryName: 'fin_report_status',
        required: true
    },
    {
        label: 'Комментарии',
        technicalName: 'comments',
        type: 'text',
        required: false
    }
]
