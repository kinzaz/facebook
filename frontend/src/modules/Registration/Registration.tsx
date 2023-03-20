import { Popup } from '@shared/UI/Popup';
import { HeaderRegistration } from './components/HeaderRegistration';
import { RegProvider } from './context';
import { FormComponent } from './components/FormComponent';
import styles from './style.module.scss';
import { FormWrapper } from '@shared/UI/FormWrapper';

export const Registration = (): JSX.Element => {
	return (
		<RegProvider>
			<Popup>
				<FormWrapper className={styles.register}>
					<HeaderRegistration />
					<FormComponent />
				</FormWrapper>
			</Popup>
		</RegProvider>
	);
};
