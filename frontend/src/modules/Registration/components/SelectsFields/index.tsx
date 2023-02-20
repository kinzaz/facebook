import { DateOfBirthSelect } from './DateOfBirthSelect';
import { Gender } from './Gender';
import { Header } from './Header';

export const SelectsFields = (): JSX.Element => {
	return (
		<>
			<Header title="Date of Birth" />
			<DateOfBirthSelect />
			<Header title="Gender" />
			<Gender />
		</>
	);
};
