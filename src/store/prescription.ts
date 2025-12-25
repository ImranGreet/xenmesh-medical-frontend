import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getRequest } from './helper';

const usePrescriptionStore = defineStore('prescription', () => {
	let prescriptions = ref<any[]>([]);
	let prescriptionCount = ref<number>(0);

	let retrievePrescriptions = async function () {
		try {
			const response = await getRequest('/api/prescriptions');
			console.log(response, 'prescriptions');
			prescriptions.value = response;
		} catch (error) {}
	};

	return {
		prescriptions,
		prescriptionCount,
		retrievePrescriptions,
	};
});

export default usePrescriptionStore;
