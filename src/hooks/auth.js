import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()
    const queryClient = useQueryClient()

    const { data: user, error } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
            axios
                .get('/api/user')
                .then(res => res.data)
                .catch(error => {
                    if (error.response.status !== 409) throw error
                    router.push('/verificar-correo')
                }),
    })

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = useMutation({
        mutationFn: async ({ setErrors, ...props }) => {
            await csrf()
            setErrors([])
            return axios.post('/register', props)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] })
            router.push('/perfil/tags')
        },
        onError: (error, { setErrors }) => {
            setErrors(error.response.data.errors)
            if (error.response.status !== 422) throw error
        },
    })

    const login = useMutation({
        mutationFn: async ({ setErrors, setStatus, ...props }) => {
            await csrf()
            setErrors([])
            setStatus(null)
            return axios.post('/login', props)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] })
        },
        onError: (error, { setErrors }) => {
            if (error.response.status !== 422) throw error
            setErrors(error.response.data.errors)
        },
    })

    const forgotPassword = useMutation({
        mutationFn: async ({ setErrors, setStatus, email }) => {
            await csrf()
            setErrors([])
            setStatus(null)
            return axios.post('/forgot-password', { email })
        },
        onSuccess: (response, { setStatus }) => {
            setStatus(response.data.status)
        },
        onError: (error, { setErrors }) => {
            if (error.response.status !== 422) throw error
            setErrors(error.response.data.errors)
        },
    })

    const resetPassword = useMutation({
        mutationFn: async ({ setErrors, setStatus, ...props }) => {
            await csrf()
            setErrors([])
            setStatus(null)
            return axios.post('/reset-password', {
                token: params.token,
                ...props,
            })
        },
        onSuccess: response => {
            router.push('/login?reset=' + btoa(response.data.status))
        },
        onError: (error, { setErrors }) => {
            if (error.response.status !== 422) throw error
            setErrors(error.response.data.errors)
        },
    })

    const resendEmailVerification = useMutation({
        mutationFn: () => {
            return axios.post('/email/verification-notification')
        },
        onSuccess: (response, { setStatus }) => {
            setStatus(response.data.status)
        },
    })

    const logout = async () => {
        if (!error) {
            await axios.post('/logout')
            queryClient.invalidateQueries({ queryKey: ['user'] })
        }
        window.location.pathname = '/entrar'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/verificar-correo' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register: register.mutate,
        login: login.mutate,
        forgotPassword: forgotPassword.mutate,
        resetPassword: resetPassword.mutate,
        resendEmailVerification: resendEmailVerification.mutate,
        logout,
    }
}
