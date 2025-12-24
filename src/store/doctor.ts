import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

// import { type Doctor } from '@/scripts/doctor';

const useDoctorStore = defineStore('doctorStore', () => {
	const doctors = ref();
	const doctorProfile = ref();
	const docotrSchedules = ref();

	let retrieveDoctors = async function () {
		try {
			let response = await axios.get('/api/retrieve-doctors');
			doctors.value = response.data.data ?? response.data;
			console.log(response, 'respo');
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
		retrieveDoctorSchedule();
	};

	let retrieveDoctorSchedule = async function () {
		let response = await axios.get(
			`/api/doctor-schedules/retrieve-doctors-schedules`
		);
		docotrSchedules.value = response.data.data;
		console.log(response,'respo');
		console.log(docotrSchedules.value,'schedules');
	};

	return {
		doctors,
		doctorProfile,
		docotrSchedules,
		retrieveDoctors,
		retrieveDoctorByID,
		retrieveDoctorSchedule
	};
});

export default useDoctorStore;
