import { defineStore } from 'pinia';

export const useErrors = defineStore({
	id: 'errors',
	state: () => ({
		errors: {}
	}),
	getters:{
		hasErrors: state => Object.keys(state.errors).length > 0,
	},
	actions: {
		setErrors(errors){
			this.errors = errors;
		},
	},
})