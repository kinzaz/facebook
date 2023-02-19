import { Input } from '../input';
import { InputProps } from '../input.props';
import cn from 'classnames';
import styles from './AuthInput.module.scss';

export const AuthInput = ({ className, ...props }: InputProps): JSX.Element => {
	return <Input className={cn(className, styles.input)} {...props} />;
};
