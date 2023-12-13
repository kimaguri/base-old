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
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/timesheet" element={<div>{<TimesheetPage />}</div>} />
                <Route path="/fin-reports" element={<div>{<FinReportsPage />}</div>} />
                <Route path="/settings" element={<div>{<SettingsPage />}</div>} />
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
