import { footerForm } from '@modules/Login/lib/constants';
import { Link, LinkProps } from 'react-router-dom';

export const ExtraLink = ({
	className,
	to,
	...props
}: LinkProps): JSX.Element => {
	return (
		<Link to={to} style={{ fontSize: '15px' }} {...props} className={className}>
			<b>{footerForm.main}</b> {footerForm.other}
		</Link>
	);
};
