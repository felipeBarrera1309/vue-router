<template>
    <router-view />
</template>

<script setup>
import { ref } from 'vue';


function pending(){
    // showGif.value = true;
    console.log('PENDIENTE LOGINNNN');
}

function resolve(){
    // showGif.value = false;
    console.log('RESUELTO LOGINNNN');
}

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