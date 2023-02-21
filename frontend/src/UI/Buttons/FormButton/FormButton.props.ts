import { ButtonProps } from 'types/ButtonProps';

export interface FormButtonProps extends ButtonProps {
	title: string;
	color?: 'blue' | 'green';
	fontSize?: 14 | 17;
}
