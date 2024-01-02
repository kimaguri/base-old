import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { fetchDictionaries } from './app/appSlice.js'

import { LoginScreen } from './features/login-screen'
import { useAuth } from './components/supabase-auth-provider'
import { PageLayout } from './components/page-layout/index.jsx'
import { ProjectsScreen } from './features/projects-screen/index.jsx'
import { FinReportsScreen } from './features/fin-reports-screen/index.jsx'
import { SettingsScreen } from './features/settings-screen/index.jsx'
import { TimesheetScreen } from './features/timesheet-screen/index.jsx'
import { ClientsScreen } from './features/clients-screen/index.jsx'

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
                <Route path="/clients" element={<ClientsScreen />} />
                <Route path="/projects" element={<ProjectsScreen />} />
                <Route path="/timesheet" element={<TimesheetScreen />} />
                <Route path="/fin-reports" element={<FinReportsScreen />} />
                <Route path="/settings" element={<SettingsScreen />} />
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
            <Route path="/login" element={<LoginScreen />} />
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
