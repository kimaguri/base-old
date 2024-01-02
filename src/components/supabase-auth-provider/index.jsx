import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yibunmywewmbmkocidci.supabase.co'
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpYnVubXl3ZXdtYm1rb2NpZGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MzM0MjMsImV4cCI6MjAxNDMwOTQyM30.UYdbXYCdvMcrPfBkSYWORzmikIJSvD5wZbZZ9-OAV7E'
const supabase = createClient(supabaseUrl, supabaseAnonKey)
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const session = supabase.auth.getSession()

        if (session?.user) {
            fetchEmployeeData(session)
        } else {
            setLoading(false)
        }

        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session?.user) {
                fetchEmployeeData(session)
            } else {
                setUser(null)
            }
        })

        return () => {
            authListener.subscription.unsubscribe()
        }
    }, [])

    const fetchEmployeeData = async (session) => {
        const { data: employeeData, error: employeeError } = await supabase
            .from('employee')
            .select('*')
            .eq('employee_id', session.user.id)
            .single()

        if (employeeError) {
            console.error('Error fetching employee data:', employeeError)

            return
        }

        setUser({
            ...employeeData,
            user_id: session.user.id,
            email: session.user.email,
            role: session.user.role
        })
        setLoading(false)
    }

    const value = {
        user,
        signIn: (email = 'sdon.mail@gmail.com', password = '123qwe123') =>
            supabase.auth.signInWithPassword({
                email,
                password
            }),
        signOut: () => supabase.auth.signOut(),
        loading
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    return useContext(AuthContext)
}

export { supabase, AuthProvider, AuthContext, useAuth }
