import { DateOfBirthSelect } from './DateOfBirthSelect';
import { GenderSelects } from './GenderSelects';

export const SelectsFields = (): JSX.Element => {
	return (
		<>
			<DateOfBirthSelect />
			<GenderSelects />
		</>
	);
};
