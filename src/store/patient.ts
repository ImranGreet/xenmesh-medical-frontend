import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type Patient } from '@/scripts/patient';

const usePatientStore = defineStore('patients', () => {
	let patients = ref<Patient[]>([]);

	let retrievePatients = async function () {
		let response = await axios.get('/api/get-patient-list');
		patients.value = response.data.patientList;
	};

	let registerNewPatient = async function () {
		let response = await axios.post('register-patient');
		if (response) {
			return 0;
		}
	};

	return {
		patients,
		/*methods*/
		retrievePatients,
		registerNewPatient,
	};
});

export default usePatientStore;
