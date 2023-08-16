<template>
  <component :is="layout" />
</template>

<script setup>
import { computed, watch } from 'vue';
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

watch(() => route,
  (newValue) => {
    console.log('Estas son las rutas a donde estoy navegando: ', newValue);
    if(route?.meta?.title){
      document.title = `vue router ${route.meta.title}`
    }else{
      document.title = 'vue router'
    }
  }, {
    immediate: true,
    deep: true
  }
)


</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
