<template>
	<div v-if="showError">
		<p v-if="local" class="error f-10 text-break" style="color: red;">
			<span :class="{ 'op-0': !local }">{{ local }}</span>
		</p>
		<p v-else-if="hasErrors" class="text-danger f-10 text-break">{{ serverError }}</p>
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { useErrors } from '../services/errors.js';

const props = defineProps({
	value: {
		default: null
	},
	showError: {
		type: Boolean,
		required: false,
		default: true
	},
	local: {
		type: String,
		required: false,
		default: null
	},
	server: {
		type: String,
		default: ''
	}
})

const { errors, hasErrors } = storeToRefs(useErrors());
const serverError = ref(null);

watch(() => props.value, () => {
	resetError()
});

watch(() => errors.value?.[props.server]?.[0], (newValue) => {
	serverError.value = newValue;
});

function resetError() {
	if (errors.value?.[props.server]) delete errors.value[props.server];
}

defineExpose({ resetError });
</script>

<style scoped lang="scss">
.error{
	height: 1rem;
	span{
		transition: opacity .2s ease-in;
	}
}
</style>