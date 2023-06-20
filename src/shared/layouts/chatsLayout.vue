<template>
    <section>
        <views />
        <div class="parent">
            <div class="child">
                <template v-for="(value, i) in menus" :key="i">
                    <router-link :to="{ name: value.ruta }" >{{ value.nombre }}</router-link>
                </template>
            </div>
            <router-view />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import views from './components/views.vue';

const menus = ref([
    {
        id: 1,
        nombre: 'chats',
        ruta: 'chats.messages.wap',
        cant: 0
    },
    {
        id: 2,
        nombre: 'Facebook Account',
        ruta: 'chats.facebook',
        cant: 0
    }
])

</script>

<style lang="scss" scoped>
section{
    height: 100%;
    .parent{
        display: flex;
        gap: 30px;
        .child{
            display: flex;
            flex-direction: column;
            a {
                text-decoration: none;
                font-size: 20px;
                color: black;
                padding: 10px;
                border-radius: 10px;
                &.router-link-active, .router-link-exact-active{
                    color: lightcoral;
                    background-color: lightcyan;
                }
            }
        }
    }
}


</style>