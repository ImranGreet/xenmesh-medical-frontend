import axios from 'axios';

let abbrevationCreator = (fullText: string): string => {
	let words = fullText.split(' ');
	let abbrevation = words
		.map((word) => word.charAt(0).toUpperCase())
		.join('');
	return abbrevation;
};

let formatTime24To12 = (time: string): string => {
	if (!time) return '';
	const value: string = time.replace(':', '.');
	let [hoursStr, minutesStr = '00'] = value.split('.');

	const hours: number = Number(hoursStr);
	const minutes: number = Number(minutesStr);

	if (Number.isNaN(hours) || Number.isNaN(minutes)) return '';

	const period: 'AM' | 'PM' = hours >= 12 ? 'PM' : 'AM';
	const formattedHours: number = hours % 12 || 12;

	return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
};
let formatDate = (dateString: string): string => {
	let date = new Date(dateString);
	let options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return date.toLocaleDateString(undefined, options);
};

let getRequist = async (url: string, params: Object = {}) => {
	try {
		let response = await axios.get(url, { params });
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};
let postRequist = async (url: string, data: Object = {}) => {
	try {
		let response = await axios.post(url, data);
		return response.data;
	} catch (error) {
		console.error('Error posting data:', error);
		throw error;
	}
};

let deleteRequist = async (url: string,id:number) => {
	try {
		let response = await axios.delete(url+'/'+id);
		return response.data;
	} catch (error) {
		console.error('Error deleting data:', error);
		throw error;
	}
};

export { abbrevationCreator, formatDate, formatTime24To12, getRequist, postRequist, deleteRequist };