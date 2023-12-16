export const meta = {
    tableName: 'fin_report',
    foreignTables: ['organization'],
    columns: [
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
    ],
    addRecord: {
        fields: [
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
    },
    editRecord: {
        fields: [
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
    }
}
