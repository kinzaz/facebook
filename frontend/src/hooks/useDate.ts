export const useDate = () => {
	const years = Array.from(new Array(108), (val, index) => {
		const year = new Date().getFullYear();
		return year - index;
	});
	const months = Array.from(new Array(12), (val, index) => 1 + index);
	const getDays = () =>
		new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
	const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

	return { years, months, days };
};
