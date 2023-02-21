import { DateOfBirthSelect } from './DateOfBirthSelect';
import { GenderSelects } from './GenderSelects';
import { Header } from './Header';

export const SelectsFields = (): JSX.Element => {
	return (
		<>
			<Header title="Date of Birth" />
			<DateOfBirthSelect />
			<GenderSelects />
		</>
	);
};
