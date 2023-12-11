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
        setUser(session?.user || null)
        setLoading(false)

        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            setUser(session?.user || null)
        })

        return () => {
            authListener.subscription.unsubscribe()
        }
    }, [])

    const value = {
        user,
        signIn: (email = 'sdon.mail@gmail.com', password = '123qwe123') =>
            supabase.auth.signInWithPassword({
                email,
                password
            }),
        signOut: () => supabase.auth.signOut()
    }

    return <AuthContext.Provider value={{ ...value, loading }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    return useContext(AuthContext)
}

export { supabase, AuthProvider, AuthContext, useAuth }
