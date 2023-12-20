export const meta = {
    tableName: 'calc_model',
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
            header: 'Комментарии',
            accessor: 'comments',
            type: 'string'
        }
    ],
    addRecord: {
        title: 'Новая модель расчета',
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
        title: 'Редактирование модели расчета',
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
            required: false
        },
        {
            label: 'Комментарии',
            technicalName: 'comments',
            type: 'text',
            required: false
        }]
    },
    deleteRecord: {
        disabled: true
    }
}
