import { ButtonProps } from "@shared/types/ReactElementsProps";

export interface FormButtonProps extends ButtonProps {
	title: string;
	color?: 'blue' | 'green';
	fontSize?: 14 | 17;
}
