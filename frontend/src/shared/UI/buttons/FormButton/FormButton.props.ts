import { ButtonProps } from 'shared/types/ButtonProps';

export interface FormButtonProps extends ButtonProps {
	title: string;
	color?: 'blue' | 'green';
	fontSize?: 14 | 17;
}
