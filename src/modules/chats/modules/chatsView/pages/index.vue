<template>
    <section>
        <div v-for="(chat, i) in chats" :key="i">
            <router-link :to="{ name: 'chats.messages.wap.details', params: { id: chat.numero }}">
                {{ chat.name }}
            </router-link>
        </div>
    </section>
    <router-view />
</template>

<script>
import { watchEffect, ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup(){

        const route = useRoute()

        const chats = ref([])
        onBeforeMount(() => {
            watchEffect(() => {
                setTimeout(() => {
                    chats.value = [
                        { id: 1, name: 'Felipe', numero: 5 },
                        { id: 2, name: 'Sofia', numero: 7 },
                        { id: 3, name: 'Paula', numero: 10 },
                    ]
                }, 500)
                console.log('Esta es la ruta en la que estamos y esta cambiando: ', route.params);
            })
        })



        return {
            chats
        }
    }
}

</script>

<style lang="scss" scoped>
section{
    display: flex;
    flex-direction: column;
    gap: 10px;
    div{
        width: 80px;
        height: 30px;
        cursor: pointer;
        a{
            text-decoration: none;
            border: 1px solid lightblue;
            color: blue;
            min-width: 100%;
            min-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            transition: 0.3s ease-in-out;
            &:hover{
                background-color: lightblue;
            }
            &.router-link-active, .router-link-exact-active{
                background-color: lightblue;
            }
        }
    }
}

</style>