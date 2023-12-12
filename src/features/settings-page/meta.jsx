import { OrganizationsPage } from '../organizations-page/index.jsx'
import { CalcModelsPage } from '../calc-models-page/index.jsx'

export const meta = [
    {
        id: 'orgsTab',
        title: 'Организации',
        component: <OrganizationsPage />
    },
    {
        id: 'rolesTab',
        title: 'Роли',
        component: <div>{'Roles Page'}</div>
    },
    {
        id: 'positionsTab',
        title: 'Штатные единицы',
        component: <div>{'Positions Page'}</div>
    },
    {
        id: 'usersTab',
        title: 'Пользователи',
        component: <div>{'Users Page'}</div>
    },
    {
        id: 'calcModelsTab',
        title: 'Модели расчета',
        component: <CalcModelsPage />
    }
]
