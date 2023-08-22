<template>
  <Suspense @pending="pending" @resolve="resolve" timeout="0">
    <template #default>
      <component :is="layout" />
    </template>
    <template #fallback>
      <h3 class="cargando">LOADING.............</h3>
    </template>
  </Suspense>
</template>

<script setup>
import { computed, watch, defineAsyncComponent, ref } from 'vue';
import { useRoute } from 'vue-router'

const loginLayout = defineAsyncComponent(() => import('./shared/layouts/loginLayout.vue'));
const adminLayout = defineAsyncComponent(() => import('./shared/layouts/adminLayout.vue'));
const mainLayout = defineAsyncComponent(() => import('./shared/layouts/mainLayout.vue'));
const chatsLayout = defineAsyncComponent(() => import('./shared/layouts/chatsLayout.vue'));
const notFoundLayout = defineAsyncComponent(() => import('./shared/layouts/notFoundLayout.vue'));
const profileLayout = defineAsyncComponent(() => import('./shared/layouts/profileLayout.vue'));

const showGif = ref(false)

const layouts = {
  'login': loginLayout,
  'about': adminLayout,
  'main': mainLayout,
  'chats': chatsLayout,
  'notFound': notFoundLayout,
  'profile': profileLayout
}

function pending(){
  showGif.value = true;
  console.log('PENDIENTE PRINCIPAL');
}

function resolve(){
  showGif.value = false;
  console.log('RESUELTO PRINCIPAL');
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
.page-fade-enter-active, .page-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.page-fade-enter, .page-fade-leave-to {
  opacity: 0;
}

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
