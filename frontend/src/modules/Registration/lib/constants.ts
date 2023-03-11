import { number } from 'yup';

export const DATE_ERRORS = {
	LESS: (value: number) =>
		`it looks like you have entered the wrong info. To register your age must be more than ${value} years old.`,
	MORE: (value: number) =>
		`it looks like you have entered the wrong info. To register your age must be less than ${value} years old.`,
};

export const GENDER_ERRORS = {
	ABSENT_GENDER: 'Please choose a genders',
};
