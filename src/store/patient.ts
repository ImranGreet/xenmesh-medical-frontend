import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type Patient } from '@/scripts/patient';

const usePatientStore = defineStore('patients', () => {
	let patients = ref<Patient[]>([]);
	let searchKeyword = ref<string>();
	let metaKeyword = ref<Object>();
	/*card*/
	let activePatientCount = ref<number>(0);
	let deactivePatientCount = ref<number>(0);
	let todaysPatientCount = ref<number>(0);
	let thisMonthPatientCount = ref<number>(0);
	let links = ref<any>({});

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

	let resetForm = () => {
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
		console.log('Form reset successfully');
	};

	let retrievePatients = async function (perPage: number = 10) {
		let response = await axios.get(`/api/filter-patient-list`, {
			params: {
				per_page: perPage,
				search: searchKeyword.value,
			},
		});
		patients.value = response.data.patientList;

		metaKeyword.value = response.data.meta;
		console.log(response.data, 'data');
	};

	let getPatientList = async function (page = 1, perPage: number = 10) {
		const response = await axios.get(
			`/api/filter-patient-list?page=${page}`,
			{
				params: {
					per_page: perPage,
				},
			}
		);

		patients.value = response.data.patientList;
		metaKeyword.value = response.data.meta;
		links.value = response.data.links;
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
			is_admitted: form.value.is_admitted ? true : false,
			keep_records: form.value.keep_records ? true : false,
			allergies: form.value.allergies,
			chronic_diseases: form.value.chronic_diseases,
			hospital_id: 1,
			appointed_doctor_id: 3,
			added_by_id: 1,
			generated_patient_id: '',
		});
		if (response) {
			resetForm();
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
			form.value.emergency_contact_phone =
				patientData.emergency_contact_phone;
			form.value.age = patientData.age;
			form.value.blood_group = patientData.blood_group;
			form.value.is_admitted = patientData.is_admitted ? true : false;
			form.value.keep_records = patientData.keep_records ? true : false;
			form.value.allergies = patientData.allergies;
			form.value.chronic_diseases = patientData.chronic_diseases;
		} else {
			console.log('Error retrieving patient data');
		}
	};

	let updatePatientInfo = async function (patientId: number) {
		let response = await axios.put(
			`/api/update-patient-info/${patientId}`,
			{
				patient_name: form.value.patient_name,
				phone_number: form.value.phone,
				email: form.value.email,
				sex: form.value.gender,
				dob: form.value.dob,
				address: form.value.address,
				emergency_contact_phone: form.value.emergency_contact_phone,
				age: form.value.age,
				blood_group: form.value.blood_group,
				is_admitted: form.value.is_admitted ? true : false,
				keep_records: form.value.keep_records ? true : false,
				allergies: form.value.allergies,
				chronic_diseases: form.value.chronic_diseases,
			}
		);

		console.log(response.data);
		if (response) {
			resetForm();
			console.log('Patient information updated successfully');
			await retrievePatients();
		} else {
			console.log('Error updating patient information');
		}
	};

	let deletePatient = async function (patientId: number) {
		let response = await axios.delete(
			`/api/delete-patient-info/${patientId}`
		);
		console.log(response.data);
		if (response) {
			console.log('Patient deleted successfully');
			await retrievePatients();
		} else {
			console.log('Error deleting patient');
		}
	};

	let updatePatientAdmissionStatus = async function (
		patientId: number,
		isAdmitted: boolean
	) {
		let response = await axios.patch(
			`/api/update-patient-admission-status/${patientId}`,
			{
				is_admitted: isAdmitted,
			}
		);
		if (response) {
			console.log('Patient admission status updated successfully');
			await retrievePatients();
		} else {
			console.log('Error updating patient admission status');
		}
	};

	let updatePatientKeepRecordsStatus = async function (
		patientId: number,
		keepRecords: boolean
	) {
		let response = await axios.put(
			`/api/update-patient-records-preference/${patientId}`,
			{
				keep_records: keepRecords ? true : false,
			}
		);
		if (response) {
			console.log('Patient records preference updated successfully');
			await retrievePatients();
		} else {
			console.log('Error updating patient records preference');
		}
	};

	let retrievePatientCounts = async function () {
		let response = await axios.get(`/api/get-active-patients-count`);
		if (response) {
			activePatientCount.value = response.data.activePatientsCount;
			deactivePatientCount.value = response.data.deactivePatientsCount;
			todaysPatientCount.value = response.data.todaysNewPatients;
			thisMonthPatientCount.value = response.data.newPatientInMonth;
		} else {
			console.log('Error retrieving patient counts');
		}
	};

	return {
		patients,
		searchKeyword,
		form,
		metaKeyword,
		activePatientCount,
		deactivePatientCount,
		todaysPatientCount,
		thisMonthPatientCount,
		links,
		/*methods*/
		getPatientList,
		retrievePatients,
		registerNewPatient,
		retrievePatient,
		updatePatientInfo,
		deletePatient,
		updatePatientAdmissionStatus,
		updatePatientKeepRecordsStatus,
		retrievePatientCounts,
		resetForm,
	};
});

export default usePatientStore;
