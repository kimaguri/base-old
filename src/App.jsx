import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { LoginPage } from './features/login-page'
import { useAuth } from './components/supabase-auth-provider'
import { PageLayout } from './components/page-layout/index.jsx'
import { ObjectsPage } from './features/objects-page/index.jsx'

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
                <Route path="/objects" element={<ObjectsPage />} />
                <Route path="/profile" element={<div>{'Profile Page'}</div>} />
                <Route path="/settings" element={<div>{'Settings Page'}</div>} />
            </Routes>
        </PageLayout>
    )
}

export const App = () => {
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
