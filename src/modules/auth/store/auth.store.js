import { defineStore } from "pinia";

export const useAuth = defineStore({
    id: 'auth',
    state: () => ({
        token: null,
        user: {}
    }),
    getters: {
        getToken: (state) => state.token,
        isAuthenticated: (state) => state.user
    },
    actions: {
        setToken(token, auth){
            this.token = token
            this.user = auth
        },
        login(payload){
            const data = payload
            if(data) this.setToken(true, data)
        }
    }
})