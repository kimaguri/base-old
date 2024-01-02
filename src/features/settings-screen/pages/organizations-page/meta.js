export const meta = {
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
