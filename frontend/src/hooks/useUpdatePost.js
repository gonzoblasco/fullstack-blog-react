import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../api/client'

export function useUpdatePost() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ id, data }) => {
            const res = await api.put(`/posts/${id}`, data)
            return res.data;
        },
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
    })
}