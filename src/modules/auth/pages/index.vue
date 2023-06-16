<template>
    <section>
        <button @click="toGoMain">Iniciar secion</button>
    </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

function toGoMain(){
    router.push({ name: 'about' })
}

</script>

<style lang="scss" scoped>
section{
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 300px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: blue;
        color: white;
    }
}

</style>