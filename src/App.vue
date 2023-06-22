<template>
  <component :is="layout" />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import loginLayout from './shared/layouts/loginLayout.vue';
import adminLayout from './shared/layouts/adminLayout.vue';
import mainLayout from './shared/layouts/mainLayout.vue';
import chatsLayout from './shared/layouts/chatsLayout.vue';
import notFoundLayout from './shared/layouts/notFoundLayout.vue';
import profileLayout from './shared/layouts/profileLayout.vue';


const layouts = {
  'login': loginLayout,
  'about': adminLayout,
  'main': mainLayout,
  'chats': chatsLayout,
  'notFound': notFoundLayout,
  'profile': profileLayout
}

const route = useRoute()

const layout = computed(() => {
  if(route?.name && route?.meta?.layout) return layouts[route.meta.layout]
  else if(route?.name) return layouts.about
  else return null
})


</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
