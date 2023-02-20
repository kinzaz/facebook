import styles from './Blur.module.scss';
import { BlurProps } from './Blur.props';

export const Blur = ({ children }: BlurProps): JSX.Element => {
	return <div className={styles.blur}>{children}</div>;
};
