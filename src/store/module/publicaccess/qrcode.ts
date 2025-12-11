import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useQRcodeStore = defineStore('publicaccess/qrcode', () => {
	let qrCodeData = ref<string>('');
	let generateQRCode = async function (patientId: string) {
		try {
            let response = await axios.get( `api/generate-patient-card-qrcode/${patientId}`);
            if (response.status === 200) {
                qrCodeData.value = response.data.qr_code_svg;
            }
        } catch (error) {
            
        }
	};
	let createPublicAppoinmnet = async function(){
		let response = axios.post(`api/create-public-appoinment`);
		console.log(response,'response public');
	}
	return {
		qrCodeData,
		generateQRCode,
		createPublicAppoinmnet
	};
});

export default useQRcodeStore;
