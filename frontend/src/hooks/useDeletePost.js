// frontend/src/hooks/useDeletePost.js
import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../api/client'

export function useDeletePost() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id) => {
            await api.delete(`/posts/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })
}