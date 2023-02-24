import { UserDataRegistration } from 'modules/Registration/types';

export const useValidateDate = (
	user: UserDataRegistration,
	less: number = 14,
	more: number = 70
) => {
	let current_date = +new Date();
	let picked_date = +new Date(user.bYear, user.bMonth - 1, user.bDay);
	let at_least = +new Date(1970 + less, 0, 1);
	let noMoreThan = +new Date(1970 + more, 0, 1);

	const lessMinimum = current_date - picked_date < at_least;
	const moreMaximum = current_date - picked_date > noMoreThan;

	return {
		lessMinimum,
		moreMaximum,
	};
};
