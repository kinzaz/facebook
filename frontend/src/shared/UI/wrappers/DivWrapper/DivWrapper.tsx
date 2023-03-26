import { DivWrapperProps } from './DivWrapper.props';

export const DivWrapper = ({
	children,
	className,
	...props
}: DivWrapperProps): JSX.Element => {
	return (
		<div {...props} className={className}>
			{children}
		</div>
	);
};
