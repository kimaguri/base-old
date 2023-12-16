import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { fetchDictionaries } from './app/appSlice.js'

import { LoginPage } from './features/login-page'
import { useAuth } from './components/supabase-auth-provider'
import { PageLayout } from './components/page-layout/index.jsx'
import { ProjectsPage } from './features/projects-page/index.jsx'
import { FinReportsPage } from './features/fin-reports-page/index.jsx'
import { SettingsPage } from './features/settings-page/index.jsx'
import { TimesheetPage } from './features/timesheet-page/index.jsx'
import { ClientsPage } from './features/clients-page/index.jsx'

import './App.css'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login')
        }
    }, [user, navigate, loading])

    return user ? children : null
}

const AuthenticatedRoutes = () => {
    return (
        <PageLayout>
            <Routes>
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/timesheet" element={<TimesheetPage />} />
                <Route path="/fin-reports" element={<FinReportsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </PageLayout>
    )
}

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        initApp()
    }, [dispatch])

    const initApp = () => {
        dispatch(fetchDictionaries())
    }

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/*"
                element={
                    <PrivateRoute>
                        <AuthenticatedRoutes />
                    </PrivateRoute>
                }
            />
            <Route element={<div>{'Not Found'}</div>} />
        </Routes>
    )
}
