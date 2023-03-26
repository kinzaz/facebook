import { Footer } from '@shared/UI/footer';
import { Splitter } from '@shared/UI/Splitter';
import { Link } from 'react-router-dom';
import { languages, menu } from './footer.data';
import styles from './Footer.module.scss';
import { FooterLoginProps } from './FooterLogin.props';
import cn from 'classnames';

export const FooterLogin = ({
	className,
	...props
}: FooterLoginProps): JSX.Element => {
	return (
		<Footer {...props} className={cn(styles.footer, className)}>
			<div className={styles['footer-wrap']}>
				{languages.map((language, index) => {
					return (
						<Link to={'/'} key={index}>
							{language}
						</Link>
					);
				})}
				<Link to="/" className={styles['footer-square']}>
					<i className="plus_icon"></i>
				</Link>
			</div>
			<Splitter className={styles.splitter} />
			<div>
				<div className={styles['footer-wrap']}>
					{menu.map((item, i) => {
						return (
							<Link to={'/'} key={i}>
								{item}
							</Link>
						);
					})}
				</div>
				<div className={styles['footer-wrap']}>
					<Link to="/" style={{ fontSize: '12px', marginTop: '10px' }}>
						Meta © {new Date().getFullYear()}
					</Link>
				</div>
			</div>
		</Footer>
	);
};
