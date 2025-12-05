import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type Patient } from '@/scripts/patient';

const usePatientStore = defineStore('patients', () => {
	let patients = ref<Patient[]>([]);
	let searchKeyword = ref<number | string>();
	let metaKeyword = ref<Object>();
	/*registration patient*/
	const form = ref({
		patient_name: '',
		phone: '',
		email: '',
		gender: '',
		dob: '',
		address: '',
		emergency_contact_phone: '',
		age: 0,
		blood_group: '',
		is_admitted: false,
		keep_records: false,
		allergies: '',
		chronic_diseases: '',
	});

	let retrievePatients = async function (perPage: number = 100) {
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
		let response = await axios.post(`/api/register-patient`, {
			patient_name: form.value.patient_name,
			phone_number: form.value.phone,
			email: form.value.email,
			sex: form.value.gender,
			dob: form.value.dob,
			address: form.value.address,
			emergency_contact_phone: form.value.emergency_contact_phone,
			age: form.value.age,
			blood_group: form.value.blood_group,
			is_admitted: form.value.is_admitted,
			keep_records: form.value.keep_records,
			allergies: form.value.allergies,
			chronic_diseases: form.value.chronic_diseases,
			hospital_id: 1,
			appointed_doctor_id: 3,
			added_by_id: 1,
			generated_patient_id: '',
		});
		if (response) {
			form.value.patient_name = '';
			form.value.phone = '';
			form.value.email = '';
			form.value.gender = '';
			form.value.dob = '';
			form.value.address = '';
			form.value.emergency_contact_phone = '';
			form.value.age = 0;
			form.value.blood_group = '';
			form.value.is_admitted = false;
			form.value.keep_records = false;
			form.value.allergies = '';
			form.value.chronic_diseases = '';
			console.log('Patient registered successfully');
		} else {
			console.log('Error registering patient');
		}
	};

	let retrievePatient = async function (patientId: number) {
		let response = await axios.get(`/api/view-patient-info/${patientId}`);
		console.log(response.data.patientInfo);
		if (response) {
			let patientData = response.data.patientInfo;
			form.value.patient_name = patientData.patient_name;
			form.value.phone = patientData.phone_number;
			form.value.email = patientData.email;
			form.value.gender = patientData.sex;
			form.value.dob = patientData.dob;
			form.value.address = patientData.address;
			form.value.emergency_contact_phone = patientData.emergency_contact_phone;
			form.value.age = patientData.age;
			form.value.blood_group = patientData.blood_group;
			form.value.is_admitted = patientData.is_admitted;
 	}else{
			console.log('Error retrieving patient data');
	}
}

	return {
		patients,
		searchKeyword,
		form,
		/*methods*/
		retrievePatients,
		registerNewPatient,
		retrievePatient,
	};
});

export default usePatientStore;
