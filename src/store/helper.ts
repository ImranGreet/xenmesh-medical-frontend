let abbrevationCreator = (fullText: string) => {
	let words = fullText.split(' ');
	let abbrevation = words
		.map((word) => word.charAt(0).toUpperCase())
		.join('');
	return abbrevation;
};

export { abbrevationCreator };
