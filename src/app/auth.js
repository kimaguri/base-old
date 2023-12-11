const apiSettings = {
    baseUrl: 'https://your-api-url.com',
    refreshTokenEndpoint: '/refresh-token',
    timeout: 5000 // 5 seconds timeout
}

export const apiRequest = {
    async request(endpoint, method, { body, headers = {}, retries = 3 }) {
        const userToken = this.getToken()
        const baseHeaders = this.getBaseHeaders(headers, userToken)

        const requestOptions = {
            method: method.toUpperCase(),
            headers: baseHeaders,
            signal: this.getTimeoutSignal(apiSettings.timeout)
        }

        if (body) {
            requestOptions.body = JSON.stringify(body)
        }

        try {
            const response = await fetch(`${apiSettings.baseUrl}${endpoint}`, requestOptions)
            await this.handleTokenExpiration(response)

            return response
        } catch (error) {
            if (retries > 0 && this.isIdempotentMethod(method)) {
                console.warn('Request failed, retrying...', error)

                return this.request(endpoint, method, { body, headers, retries: retries - 1 })
            }
            console.error('API request failed', error)
            throw error
        }
    },
    get(props) {
        return this.request(props.endpoint, 'GET', props)
    },
    post(props) {
        return this.request(props.endpoint, 'POST', props)
    },
    put(props) {
        return this.request(props.endpoint, 'PUT', props)
    },
    delete(props) {
        return this.request(props.endpoint, 'DELETE', props)
    },
    getBaseHeaders(customHeaders, userToken) {
        const baseHeaders = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...customHeaders
        }

        if (userToken) {
            baseHeaders['Authorization'] = `Bearer ${userToken}`
        }

        return baseHeaders
    },
    async handleTokenExpiration(response) {
        if (response.status === 401) {
            const refreshToken = localStorage.getItem('refreshToken')

            if (refreshToken) {
                await this.refreshToken(refreshToken)

                return true
            }
        }

        return false
    },
    async refreshToken(refreshToken) {
        const response = await fetch(`${apiSettings.baseUrl}${apiSettings.refreshTokenEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ refreshToken })
        })

        if (response.ok) {
            const { newToken } = await response.json()
            localStorage.setItem('userToken', newToken)
        } else {
            console.error('Failed to refresh token')
            throw new Error('Failed to refresh token')
        }
    },
    getToken() {
        return localStorage.getItem('userToken')
    },
    getTimeoutSignal(timeout) {
        const controller = new AbortController()
        setTimeout(() => controller.abort(), timeout)

        return controller.signal
    },
    isIdempotentMethod(method) {
        return ['GET', 'PUT', 'DELETE'].includes(method.toUpperCase())
    }
}
