import { getRequest } from '@/store/helper';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useAuthRoleStore = defineStore('auth-role', () => {
	let roles = ref<Array<any>>([]);

	let retrieveRoles = async () => {
		let response = await getRequest('/api/get-roles-only');
		roles.value = response.data.roles;
		console.log('Roles fetched:', response);
	};

	return {
		roles,
		retrieveRoles,
	};
});

export default useAuthRoleStore;
