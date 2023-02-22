import { useDate } from '../../../../../hooks/useDate';
import styles from './style.module.scss';
import { DateOfBirthSelectProps } from './DateOfBirthSelect.props';
import { SelectInput } from 'UI/SelectInput';
import { BirthSelects } from './BirthSelects';
import { SelectsFieldWrapper } from '../SelectsFieldWrapper';
import { Header } from '../Header';

export const DateOfBirthSelect = ({
	handleRegisterChange,
	bDay,
	bMonth,
	bYear,
}: DateOfBirthSelectProps): JSX.Element => {
	const { days, months, years } = useDate();

	return (
		<SelectsFieldWrapper header="Date of Birth">
			{/* <SelectInput
				arrayValue={days}
				name="bDay"
				onChange={handleRegisterChange}
				value={bDay}
			/>
			<SelectInput
				arrayValue={months}
				name="bMonth"
				onChange={handleRegisterChange}
				value={bMonth}
			/>
			<SelectInput
				arrayValue={years}
				name="bYear"
				onChange={handleRegisterChange}
				value={bYear}
			/> */}
			<BirthSelects />
		</SelectsFieldWrapper>
	);
};
