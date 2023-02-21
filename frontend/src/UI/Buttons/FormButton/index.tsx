import { FormButtonProps } from './FormButton.props';
import cn from 'classnames';
import styles from './style.module.scss';

export const FormButton = ({
	title,
	className,
	color = 'green',
	fontSize = 14,
	...props
}: FormButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles['open-signup'], className, {
				[styles['open-signup_blue']]: color === 'blue',
				[styles['open-signup_17px']]: fontSize === 17,
			})}
			{...props}
		>
			{title}
		</button>
	);
};
