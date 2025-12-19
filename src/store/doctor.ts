import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

// import { type Doctor } from '@/scripts/doctor';

const useDoctorStore = defineStore('doctorStore', () => {
	const doctors = ref();
	const doctorProfile = ref();

	let retrieveDoctors = async function () {
		try {
			let response = await axios.get('/api/retrieve-doctors');
			doctors.value = response.data.data ?? response.data;
		} catch (error) {
			console.log(error);
		}
	};

	let retrieveDoctorByID = async function (doctorID: number) {
		let response = await axios.get(
			`/api/retrieve-docotr-profile/${doctorID}`
		);
		console.log(response, 'respo');
		doctorProfile.value = response.data.doctorProfile;
	};

	return {
		doctors,
		doctorProfile,
		retrieveDoctors,
		retrieveDoctorByID,
	};
});

export default useDoctorStore;
