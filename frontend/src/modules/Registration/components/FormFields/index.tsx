import { InfoRegistration } from '../InfoRegistration';
import { RegisterInput } from '../RegisterInput';
import { InitialsInputs } from '../InitialsInputs';
import { SelectsFields } from '../SelectsFields';
import { FormButton } from 'UI/Buttons/FormButton';
import { RegContext } from 'modules/Registration/context';
import { useContext } from 'react';

export const FormFields = (): JSX.Element => {
	const { handleRegisterChange } = useContext(RegContext);

	return (
		<>
			<InitialsInputs />
			<RegisterInput
				type="text"
				placeholder="Mobile number or email address"
				name={'email'}
				onChange={handleRegisterChange}
			/>
			<RegisterInput
				type="password"
				placeholder="New password"
				name={'password'}
				onChange={handleRegisterChange}
			/>
			<SelectsFields />
			<InfoRegistration />
			<FormButton title="Sign up" fontSize={17} />
		</>
	);
};
