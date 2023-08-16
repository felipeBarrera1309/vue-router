<template>
    <section>
        <div v-for="(message, i) in identifyMessage" :key="i">
            <p>{{ message.text }}</p>
        </div>
    </section>
</template>

<script>

export default {
    props: {
        id: {
            type: String,
            required: true,
            default: ''
        }
    },
    data: () => ({
        messages: [
            { id: 40, text: 'Hola', author: 5 },
            { id: 45, text: 'Como se encuentran el dia de hoy', author: 7 },
            { id: 50, text: 'Como amanecio la people el dia de hoy', author: 10 },
        ]
    }),
    computed: {
        identifyMessage(){
            return this.messages.filter(el => el.author.toString() === this.id)
        }
    }
}

</script>

<style lang="scss" scoped>
section{
    &:has(.router-link){
        &:nth-child(2){
            color: red;
        }
    }
}

</style>