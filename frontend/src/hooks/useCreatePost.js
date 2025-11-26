// frontend/src/hooks/useCreatePost.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/client";

export function useCreatePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newPost) => {
            const res = await api.post('/posts', newPost)
            return res.data
        },
        onSuccess: () => {
            // refrescamos la lista
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })
}