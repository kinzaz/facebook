import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type ArrowTo = 'right' | 'top' | 'left' | 'bottom';
type ErrorFieldWidth = 'small' | 'medium' | 'big';

export interface ErrorFieldProps
	extends DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	name: string;
	arrowDirection?: ArrowTo;
	width?: ErrorFieldWidth;
}
