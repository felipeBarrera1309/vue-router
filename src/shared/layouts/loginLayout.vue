<template>
    <router-view />
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

console.log('Esta es la informacion de la ruta: ', route.meta);

</script>