export const timesheetModalMeta = [
    {
        label: 'Дата',
        technicalName: 'issue_date',
        type: 'date',
        required: true
    },
    {
        label: 'Проект',
        technicalName: 'project_id',
        type: 'select',
        source: 'dev_projects',
        required: true
    },
    {
        label: 'Часы',
        technicalName: 'hours_amount',
        type: 'text',
        required: true
    }
]
