import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type Patient } from '@/scripts/patient';

const usePatientStore = defineStore('patients', () => {
	let patients = ref<Patient[]>([]);
	let searchKeyword = ref<number | string>();
	let metaKeyword = ref<Object>();

	let retrievePatients = async function (perPage: number = 10) {
		let response = await axios.get(`/api/filter-patient-list`, {
			params: {
				per_page: perPage,
				serach: searchKeyword.value,
			},
		});
		patients.value = response.data.patientList;

		metaKeyword.value = response.data.meta;
	};

	let registerNewPatient = async function () {
		let response = await axios.post('register-patient');
		if (response) {
			return 0;
		}
	};

	return {
		patients,
		searchKeyword,
		/*methods*/
		retrievePatients,
		registerNewPatient,
	};
});

export default usePatientStore;
