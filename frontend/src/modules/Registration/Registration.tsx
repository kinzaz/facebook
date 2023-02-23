import { Blur } from 'UI/Blur';
import { HeaderRegistration } from './components/HeaderRegistration';
import { RegisterWrapper } from './components/RegisterWrapper';
import { RegProvider } from './context';
import { FormComponent } from './components/FormComponent';
import styles from './style.module.scss';

export const Registration = (): JSX.Element => {
	return (
		<RegProvider>
			<Blur>
				<RegisterWrapper className={styles.register}>
					<HeaderRegistration />
					<FormComponent />
				</RegisterWrapper>
			</Blur>
		</RegProvider>
	);
};
