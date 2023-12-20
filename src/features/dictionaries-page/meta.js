export const meta = {
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
    ],
    addRecord: {
        fields: [{
            label: 'Наименование',
            technicalName: 'name',
            type: 'text',
            required: true
        },
        {
            label: 'Код',
            technicalName: 'code',
            type: 'text',
            required: true
        },
        {
            label: 'Значения',
            technicalName: 'values_json',
            type: 'text',// TODO_TEMP нужен новый формат поля для json
            required: false
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
            label: 'Код',
            technicalName: 'code',
            type: 'text',
            required: true
        },
        {
            label: 'Значения',
            technicalName: 'values_json',
            type: 'text',// TODO_TEMP нужен новый формат поля для json
            required: false
        },
        {
            label: 'Комментарии',
            technicalName: 'comments',
            type: 'text',
            required: false
        }]
    }
}
