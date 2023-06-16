<template>
    <section>
        <button @click="toGo(true)">Home</button>
        <button @click="toGo">About</button>
        <router-view />
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function toGo(value){
    if(value){
        router.push({ name: 'admin' })
    }else{
        router.push({ name: 'about' })
    }
}

</script>

<style lang="scss" scoped>

</style>