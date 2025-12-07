import { defineStore } from 'pinia';
import { type Hospital, type HospitalApiResponse } from '@/scripts/hospital';
import { ref } from 'vue';
import axios from 'axios';

const useHospitalStore = defineStore('hospital', () => {
	const hospitalProfile = ref<Hospital | null>(null);
	const loading = ref(false);
	const error = ref<string | null>(null);

	const retrieveHospitalProfile = async () => {
		loading.value = true;
		error.value = null;

		try {
			const response = await axios.get<HospitalApiResponse>(
				'/api/get-hospital-info'
			);
			console.log('Hospital Profile Response:', response.data);

			hospitalProfile.value = response.data.hospital_info;
		} catch (err: any) {
			error.value =
				err.response?.data?.message || 'Something went wrong!';
			console.error('Hospital Error:', err);
		} finally {
			loading.value = false;
		}
	};

	return {
		hospitalProfile,
		loading,
		error,
		retrieveHospitalProfile,
	};
});

export default useHospitalStore;
