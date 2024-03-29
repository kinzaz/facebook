import { useContext } from 'react';
import { RadioInput } from '@shared/UI/RadioInput';
import { RegContext } from '@modules/Registration/context';
import { ErrorField } from '@shared/UI/ErrorField';
import { useField } from 'formik';

export const GenderRadios = (): JSX.Element => {
	const { handleRegisterChange, genderError } = useContext(RegContext);
	const [field, meta] = useField('gender');

	console.log(genderError);

	return (
		<>
			<div>
				<RadioInput title="Male" {...field} />
				<RadioInput
					{...field}
					title="Female"
					name="gender"
					value={'female'}
					onChange={handleRegisterChange}
				/>
				<RadioInput
					{...field}
					title="Custom"
					name="gender"
					value={'custom'}
					onChange={handleRegisterChange}
				/>
			</div>
			{genderError && <ErrorField name={'gender'} titleError={genderError} />}
		</>
	);
};
