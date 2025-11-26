import { useQuery } from "@tanstack/react-query";
import api from "../api/client";

export function usePost(id) {
    return useQuery({
        queryKey: ["posts", id],
        queryFn: async () => {
            const res = await api.get(`/posts/${id}`)
            return res.data
        },
    });
}