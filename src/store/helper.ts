let abbrevationCreator = (fullText: string):string => {
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

export { abbrevationCreator, formatDate, formatTime24To12 };
