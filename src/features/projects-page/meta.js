export const meta = {
    tableName: 'dev_project',
    columns: [
        {
            header: 'Фамилия',
            accessor: 'lastName',
            type: 'string'
        },
        {
            header: 'Имя',
            accessor: 'firstName',
            type: 'string'
        },
        {
            header: 'Дата рождения',
            accessor: 'birthDate',
            type: 'numeric'
        },
        {
            header: 'Пол',
            accessor: 'sex',
            type: 'string'
        }
    ]
}
