import { InputProps } from './input.props';

export const Input = ({ ...props }: InputProps): JSX.Element => {
	return <input {...props} />;
};
