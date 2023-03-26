import { FooterElementProps } from './Footer.props';

export const Footer = ({
	children,
	className,
	...props
}: FooterElementProps): JSX.Element => {
	return (
		<footer {...props} className={className}>
			{children}
		</footer>
	);
};
