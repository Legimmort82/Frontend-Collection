import {useMutation, UseMutationOptions, UseMutationResult} from '@tanstack/react-query'
import { apiClient } from '../instance'

/**
 * login user with credentials
 * @param {UseMutationOptions} options 
 * @returns UseMutationResult
 */
const useVerification = (options = {}) => {
    return useMutation({
        mutationFn: (token) => apiClient.post('/api/email/verification-notification',{},{headers:{Authorization: `Bearer ${token}`}}),

        ...options
    })
}



export default useVerification