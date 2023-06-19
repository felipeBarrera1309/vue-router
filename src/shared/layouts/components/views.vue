<template>
    <section>
        <router-link :to="{ name: 'admin' }">Home</router-link>
        <router-link :to="{ name: 'about' }">about</router-link>
    </section>
</template>

<script setup>


</script>

<style lang="scss" scoped>
section{
    display: flex;
    justify-content: center;
    margin-top: 40px;
    min-height: 60px;
    align-items: center;
    gap: 40px;
    a{
        height: 30px;
        text-decoration: none;
        font-size: 20px;
        text-transform: uppercase;
        padding: 0 10px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        color: blue;
        &.router-link-active, .router-link-exact-active{
            background-color: lightblue;
        }
    }
}

</style>