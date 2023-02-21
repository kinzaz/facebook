import { GenderWrapper } from './GenderWrapper';
import { GenderRadios } from './GenderRadios';
import { Header } from '../Header';

export const GenderSelects = (): JSX.Element => {
	return (
		<GenderWrapper>
			<Header title="Gender" />
			<GenderRadios />
		</GenderWrapper>
	);
};
