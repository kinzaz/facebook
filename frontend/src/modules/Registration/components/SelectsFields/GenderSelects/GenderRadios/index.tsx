import { RadioInput } from 'UI/RadioInput';
import { useContext } from 'react';
import { RegContext } from 'modules/Registration/context';

export const GenderRadios = (): JSX.Element => {
	const { handleRegisterChange } = useContext(RegContext);

	return (
		<>
			<RadioInput
				title="Male"
				name="gender"
				value={'male'}
				onChange={handleRegisterChange}
			/>
			<RadioInput
				title="Female"
				name="gender"
				value={'female'}
				onChange={handleRegisterChange}
			/>
			<RadioInput
				title="Custom"
				name="gender"
				value={'custom'}
				onChange={handleRegisterChange}
			/>
		</>
	);
};
