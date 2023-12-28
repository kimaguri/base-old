import { OrganizationsPage } from '../organizations-page/index.jsx'
import { CalcModelsPage } from '../calc-models-page/index.jsx'
import { DictionariesPage } from '../dictionaries-page/index.jsx'

export const meta = [
    {
        id: 'orgsTab',
        title: 'Организации',
        type: 'component',
        component: <OrganizationsPage />
    },
    {
        id: 'rolesTab',
        title: 'Роли',
        type: 'component',
        component: <div>{'Roles Page'}</div>
    },
    {
        id: 'positionsTab',
        title: 'Штатные единицы',
        type: 'component',
        component: <div>{'Positions Page'}</div>
    },
    {
        id: 'employeesTab',
        title: 'Сотрудники',
        type: 'component',
        component: <div>{'Employees Page'}</div>
    },
    {
        id: 'calcModelsTab',
        title: 'Модели расчета',
        type: 'component',
        component: <CalcModelsPage />
    },
    {
        id: 'dictionariesTab',
        title: 'Справочники',
        type: 'component',
        component: <DictionariesPage />
    }
]
