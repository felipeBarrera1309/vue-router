<template>
    <section>
        <Form @submit="toGoMain" class="form">
            <Field name="input" v-slot="{ field, errorMessage }" rules="required|email" >
                <el-input name="input" v-model="username" placeholder="Email" maxlength="30" v-bind="field" />
                <span v-if="errorMessage">{{ errorMessage }}</span>
            </Field>
            <Field name="password" v-slot="{ field, errorMessage }" rules="required">
                <el-input name="password" type="password" v-model="password" placeholder="password" v-bind="field" />
                <span v-if="errorMessage">{{ errorMessage }}</span>
            </Field>
            <button type="submit" >Iniciar secion</button>
        </Form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { Form, Field } from 'vee-validate';
import { useAuth } from '../store/auth.store.js';

const router = useRouter()
const route = useRoute()
const username = ref('')
const password = ref('')


const { login } = useAuth();
const { getToken } = storeToRefs(useAuth());

function toGoMain(){
    const payload = {
        username: username.value,
        password: password.value,
        tipo: 21
    }
    login(payload)
    router.push({ name: 'admin' })
}

</script>

<style lang="scss" scoped>
section{
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .form{
        display: flex;
        flex-direction: column;
        gap: 30px;
        span{
            color: red;
        }
        button{
            width: 300px;
            height: 50px;
            border-radius: 10px;
            border: none;
            background-color: blue;
            color: white;
        }
    }
}

</style>