import { Popup } from 'UI/Popup';
import { HeaderRegistration } from './components/HeaderRegistration';
import { RegisterWrapper } from './components/RegisterWrapper';
import { RegProvider } from './context';
import { FormComponent } from './components/FormComponent';
import styles from './style.module.scss';

export const Registration = (): JSX.Element => {
	return (
		<RegProvider>
			<Popup>
				<RegisterWrapper className={styles.register}>
					<HeaderRegistration />
					<FormComponent />
				</RegisterWrapper>
			</Popup>
		</RegProvider>
	);
};
