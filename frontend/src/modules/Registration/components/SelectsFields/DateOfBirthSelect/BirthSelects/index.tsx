import { useDate } from 'hooks/useDate';
import { RadioInput } from 'UI/RadioInput';
import { SelectInput } from 'UI/SelectInput';
import { GenderRadioProps } from './Gender.props';
import styles from './style.module.scss';
import { useContext } from 'react';
import { RegContext } from 'modules/Registration/context';
export const BirthSelects = (): JSX.Element => {
	const { days, months, years } = useDate();
	const { handleRegisterChange, user } = useContext(RegContext);

	return (
		<>
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
		</>
	);
};
