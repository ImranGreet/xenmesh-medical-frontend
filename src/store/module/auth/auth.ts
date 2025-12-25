import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useUserAuthenticationStore = defineStore('user-authentication', () => {
	const name = ref('');
	const username = ref('');
	const email = ref('');
	const selectedRole = ref('');
	const password = ref('');
	const confirmPassword = ref('');

	let resetForm = () => {
		name.value = '';
		username.value = '';
		email.value = '';
		selectedRole.value = '';
		password.value = '';
		confirmPassword.value = '';
	};

	const submitRegistrationForm = async (e: Event) => {
		e.preventDefault();
		try {
			let response = await axios.post('/api/register-hospital-member', {
				name: name.value,
				username: username.value,
				email: email.value,
				role: selectedRole.value,
				password: password.value,
				password_confirmation: confirmPassword.value,
			});
			console.log('Registration successful:', response);
			resetForm();
		} catch (error) {
			console.error('Registration failed:', error);
			throw error;
		}
	};

	return {
		name,
		username,
		email,
		selectedRole,
		password,
		confirmPassword,
		submitRegistrationForm,
	};
});

export default useUserAuthenticationStore;
