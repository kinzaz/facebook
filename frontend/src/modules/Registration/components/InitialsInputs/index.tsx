import { RegisterInput } from '../RegisterInput';

export const InitialsInputs = (): JSX.Element => {
	return (
		<>
			<RegisterInput
				type="text"
				placeholder="First name"
				name={'first_name'}
				// onChange={handleRegisterChange}
			/>
			<RegisterInput
				type="text"
				placeholder="Surname"
				name={'last_name'}
				// onChange={handleRegisterChange}
			/>
		</>
	);
};
