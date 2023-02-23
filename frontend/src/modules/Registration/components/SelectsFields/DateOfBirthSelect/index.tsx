import { BirthSelects } from './BirthSelects';
import { SelectsFieldWrapper } from '../SelectsFieldWrapper';

export const DateOfBirthSelect = (): JSX.Element => {
	return (
		<SelectsFieldWrapper header="Date of Birth">
			<BirthSelects />
		</SelectsFieldWrapper>
	);
};
