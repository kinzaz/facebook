import { GenderRadios } from './GenderRadios';
import { SelectsFieldWrapper } from '../SelectsFieldWrapper';

export const GenderSelects = (): JSX.Element => {
	return (
		<SelectsFieldWrapper header="Gender">
			<GenderRadios />
		</SelectsFieldWrapper>
	);
};
