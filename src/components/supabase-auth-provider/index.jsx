import { createContext, useContext, useEffect, useState } from 'react'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yibunmywewmbmkocidci.supabase.co'
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpYnVubXl3ZXdtYm1rb2NpZGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MzM0MjMsImV4cCI6MjAxNDMwOTQyM30.UYdbXYCdvMcrPfBkSYWORzmikIJSvD5wZbZZ9-OAV7E'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check the current session and set the user
        const session = supabase.auth.getSession()
        setUser(session?.user || null)
        setLoading(false)

        // Listen for changes in authentication state
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
        // ... add other auth functions as needed
    }

    return <AuthContext.Provider value={{ ...value, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}
