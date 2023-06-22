<template>
    <div>
        <h2>Esta es la vista de profile</h2>
        <button @click="addDynamicRoute">Add route dynamic</button>
        <router-link to="/dynamic" >Vist login</router-link>
        <button @click="removeDynamicRoute">Remove dynamic route</button>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

function addDynamicRoute(){
    router.addRoute({
        name: 'dynamic',
        path: '/dynamic',
        component: () => import('../../../modules/auth/pages/index.vue')
    })
    console.log('This add a new dynamic route');
}

function removeDynamicRoute(){
    router.removeRoute('dynamic')
}

</script>

<style lang="scss" scoped>

</style>