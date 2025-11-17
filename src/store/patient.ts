import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type Patient } from '@/scripts/patient';

const usePatientStore = defineStore('patients', () => {
	let patients = ref<Patient[]>([]);

	let retrievePatients = async function (perPage: number = 10) {
		let response = await axios.get(`/api/get-patient-list`, {
			params: {
				per_page: perPage,
			},
		});
		patients.value = response.data.patientList;
		console.log(patients.value,"pop");
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
