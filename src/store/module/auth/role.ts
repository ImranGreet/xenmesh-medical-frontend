import { defineStore } from 'pinia';
import { ref } from 'vue';

const useAuthRoleStore = defineStore('auth-role', () => {
	let roles = ref<Array<any>>([]);

	return {
		roles,
	};
});

export default useAuthRoleStore;
