import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type Doctor } from '@/scripts/doctor';

const useDoctorStore = defineStore('doctorStore', () => {
	const doctors = ref<Doctor[]>([]);

	let retrieveDoctors = async function () {
		try {
			let response = await axios.get('/api/retrieve-doctors');
			doctors.value = response.data.data ?? response.data;
		} catch (error) {
			console.log(error);
		}
	};

	let retrievePatientByID = async function ($patientID: number) {
		let response = await axios.get(
			`api/retrieve-docotr-profile/${$patientID}`
		);
		console.log(response, 'doctor');
	};

	return {
		doctors,
		retrieveDoctors,
		retrievePatientByID,
	};
});

export default useDoctorStore;
