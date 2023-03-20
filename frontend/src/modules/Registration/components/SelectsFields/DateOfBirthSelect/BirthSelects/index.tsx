import { useContext } from 'react';
import { useDate } from '@hooks/useDate';
import { SelectInput } from '@shared/UI/SelectInput';
import { RegContext } from '@modules/Registration/context';
import { ErrorField } from '@shared/UI/ErrorField';

export const BirthSelects = (): JSX.Element => {
	const { days, months, years } = useDate();
	const { handleRegisterChange, user, dateError } = useContext(RegContext);

	return (
		<>
			<div>
				<SelectInput
					arrayValue={days}
					name="bDay"
					onChange={handleRegisterChange}
					value={user.bDay}
				/>
				<SelectInput
					arrayValue={months}
					name="bMonth"
					onChange={handleRegisterChange}
					value={user.bMonth}
				/>
				<SelectInput
					arrayValue={years}
					name="bYear"
					onChange={handleRegisterChange}
					value={user.bYear}
				/>
			</div>
			{dateError && <ErrorField name={''} titleError={dateError} />}
		</>
	);
};
