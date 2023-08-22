<template>
    <views />
    <router-view />
</template>

<script setup>
import views from '../components/views.vue';

// function pending(){
//     // showGif.value = true;
//     console.log('PENDIENTE HOMEEEEEE');
// }

// function resolve(){
//     // showGif.value = false;
//     console.log('RESUELTO HOMEEEEEEE');
// }

</script>

<style lang="scss" scoped>
.cargando{
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

</style>