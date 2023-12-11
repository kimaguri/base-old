import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { App } from './App.jsx'
import { theme } from './theme.js'
import { AuthProvider } from './components/supabase-auth-provider'
import { store } from './app/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <ReduxProvider store={store}>
                        <App />
                    </ReduxProvider>
                </ChakraProvider>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
)
