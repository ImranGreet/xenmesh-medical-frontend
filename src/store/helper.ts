import axios from 'axios';

let abbrevationCreator = (fullText: string): string => {
	let words = fullText.split(' ');
	let abbrevation = words
		.map((word) => word.charAt(0).toUpperCase())
		.join('');
	return abbrevation;
};

let formatTime24To12 = (time: string): string => {
	console.log('Formatting time:', time);
	if (!time) return '';

	const [hourStr, minute] = time.split(':');
	let hour = Number(hourStr);

	const period = hour >= 12 ? 'PM' : 'AM';
	hour = hour % 12 || 12;

	return `${hour}:${minute} ${period}`;
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

let getRequest = async (url: string, params: Object = {}) => {
	try {
		let response = await axios.get(url, { params });
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};


let deleteRequist = async (url: string, id: number) => {
	try {
		let response = await axios.delete(url + '/' + id);
		return response.data;
	} catch (error) {
		console.error('Error deleting data:', error);
		throw error;
	}
};

export {
	abbrevationCreator,
	formatDate,
	formatTime24To12,
	getRequest,
	deleteRequist,
};
