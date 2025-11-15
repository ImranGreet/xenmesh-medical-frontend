import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type Patient } from '@/scripts/patient';

const usePatientStore = defineStore('patients', () => {
	let patientList = ref<Patient[]>([]);

	let retrievePatients = async function () {
		let response = await axios.get('/api/get-patient-list');
		if (response) {
			return 0;
		}
	};

	let registerNewPatient = async function () {
		let response = await axios.post('register-patient');
		if (response) {
			return 0;
		}
	};

	return {
		patientList,
		/*methods*/
		retrievePatients,
		registerNewPatient,
	};
});

export default usePatientStore;
