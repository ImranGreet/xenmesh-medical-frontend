import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useStatusStore = defineStore('statusStore', () => {
	const statuses = ref<string[]>([]);

	let retrieveStatuses = async function () {
		try {
			let response = await axios.get('/api/retrieve-statuses');
			statuses.value = response.data.statuses;
			console.log(response.data.statuses);
		} catch (error) {
			console.log(error);
		}
	};

	let createStatus = async function () {
		let response = await axios.post('/create-status');
		if (response) {
			return 0;
		}
	};

	let updateStatus = async function () {
		let response = await axios.put('/update-status');
		if (response) {
			return 0;
		}
	};

	let deleteStatus = async function (statusIdNumber: number) {
		let response = await axios.delete(`delete-status/${statusIdNumber}`);
		if (response) {
			return 0;
		}
	};

	return {
		statuses,
		/*methods*/
		retrieveStatuses,
		createStatus,
		updateStatus,
		deleteStatus,
	};
});

export default useStatusStore;
